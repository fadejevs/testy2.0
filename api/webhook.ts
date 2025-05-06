import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2025-04-30.basil' });
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // Service role key, never expose to frontend!
);

export const config = {
  api: {
    bodyParser: false, // Stripe needs the raw body
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');

  const sig = req.headers['stripe-signature'] as string;
  let event;

  // Get raw body for Stripe signature verification
  const buf = await new Promise<Buffer>((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on('data', (chunk) => chunks.push(chunk));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });

  try {
    event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err: any) {
    console.error("Webhook signature verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const userId = session.metadata?.user_id;
    console.log("Webhook received for user:", userId, "Session:", session.id, "Metadata:", session.metadata);
    if (userId) {
      const { error } = await supabase
        .from('users')
        .update({ is_paid: true })
        .eq('id', userId);
      if (error) {
        console.error("Supabase update error:", error.message);
      } else {
        console.log("User marked as paid in Supabase:", userId);
      }
    } else {
      console.error("No userId found in session metadata");
    }
  } else {
    console.log("Received unrelated event type:", event.type);
  }

  res.status(200).json({ received: true });
}

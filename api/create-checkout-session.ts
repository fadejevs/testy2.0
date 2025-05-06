import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2025-04-30.basil' });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');

  const { user_id, email } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price: 'price_1RJAqUKks4pzFwyLJAr8ypBx', // Replace with your Stripe price ID
          quantity: 1,
        },
      ],
      success_url: 'https://trytesty.com/dashboard?success=1',
      cancel_url: 'https://trytesty.com/payment-failed',
      metadata: {
        user_id,
        email,
      },
      customer_email: email,
    });

    res.status(200).json({ url: session.url });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
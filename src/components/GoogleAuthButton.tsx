import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_ANON_KEY!
);

export default function GoogleAuthButton() {
  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin + '/dashboard',
      },
    });
  };

  return (
    <button
      onClick={handleLogin}
      className="rounded-full px-8 py-6 bg-black text-white text-lg font-medium hover:bg-slate-800"
    >
      Sign up / Log in with Google
    </button>
  );
}

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/supabaseClient";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      setLoading(false);
      if (!data.user) {
        navigate("/", { replace: true });
      }
    });
    // Optionally, listen for auth changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (!session?.user) {
        navigate("/", { replace: true });
      }
    });
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, [navigate]);

  if (loading) return null; // or a spinner

  return user ? children : null;
};

export default ProtectedRoute; 
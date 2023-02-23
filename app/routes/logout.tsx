import { redirect } from '@remix-run/node';
import { createClient } from '@supabase/supabase-js'

export const loader = async () => {
  const env = {
    SUPABASE_URL: process.env.SUPABASE_URL!,
    SUPABASE_ANON_TOKEN: process.env.SUPABASE_ANON_TOKEN!,
  };

  const supabase = createClient(
    env.SUPABASE_URL!, 
    env.SUPABASE_ANON_TOKEN!)

  const { error } = await supabase.auth.signOut();

  return redirect("/");
};


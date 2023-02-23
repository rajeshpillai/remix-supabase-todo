import { redirect } from '@remix-run/node';
import {supabase} from "../lib/helper/supabase-client";


export const loader = async () => {
  const { error } = await supabase.auth.signOut();
  return redirect("/");
};


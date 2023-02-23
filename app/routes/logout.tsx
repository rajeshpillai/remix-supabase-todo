import { redirect } from '@remix-run/node';
import {supabase} from "../lib/helper/supabase-client";
import { auth } from "~/services/auth.server";



export const loader = async (request) => {
  const { error } = await supabase.auth.signOut();
  await auth.logout(request, { redirectTo: "/login" });
  return null;
};


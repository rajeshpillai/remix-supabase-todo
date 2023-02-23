import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js'

import { redirect, json } from "@remix-run/node";

import {
  Form,
  useActionData
} from "@remix-run/react";

export const loader = () => {
  const env = {
    SUPABASE_URL: process.env.SUPABASE_URL!,
    SUPABASE_ANON_TOKEN: process.env.SUPABASE_ANON_TOKEN!,
  };
  return {env};
}

export const action = async ({ request }) => {
  const env = {
    SUPABASE_URL: process.env.SUPABASE_URL!,
    SUPABASE_ANON_TOKEN: process.env.SUPABASE_ANON_TOKEN!,
  };

  const formData = await request.formData();

  const email = formData.get("email");
  const password = formData.get("password");

  const supabase = createClient(
    env.SUPABASE_URL!, 
    env.SUPABASE_ANON_TOKEN!)

  const {data, error} = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  
  console.log("AUTH:RESULTXX: ", error, data);

  if(!error) {
    return redirect("/dashboard");
  }
  return error;
};

export default function Login() {
  const error = useActionData();

  return (
    <>
      <Form method='post'>
        <label htmlFor="input-email">Email</label>
        <input id="input-email" name="email" type="email"  />

        <label htmlFor="input-password">Password</label>
        <input id="input-password" name="password" type="password" />

        <br />

        <button type="submit">Login</button>
      </Form>

      {error && <h2>{<pre>{error.message}</pre>}</h2>}
      

      <p>
        Need an account <Link to="/signup">Sign Up</Link>
      </p>
    </>
  )
}
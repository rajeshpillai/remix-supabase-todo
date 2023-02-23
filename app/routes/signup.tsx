import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js'

import { redirect } from "@remix-run/node";

import {
  useLoaderData,
  Form
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

  supabase.auth.signUp({
    email: email,
    password: password,
  })

  return redirect("/dashboard");
};

export default function Signup() {
  const {env} = useLoaderData();

  const emailRef = useRef();
  const passwordRef = useRef();

  const [supabase] = useState(() => 
    createClient(
      env.SUPABASE_URL!, 
      env.SUPABASE_ANON_TOKEN!)
  );

  // const signUp = (e) => {
  //   e.preventDefault();
  //   alert();
  //   supabase.auth.signUp({
  //     email: "sociallogin76@gmail.com",
  //     password: "super32",
  //   })
  // }

  return (
    <>
      <Form method='post'>
        <label htmlFor="input-email">Email</label>
        <input id="input-email" name="email" type="email" ref={emailRef} />

        <label htmlFor="input-password">Password</label>
        <input id="input-password" name="password" type="password" ref={passwordRef} />

        <br />

        <button type="submit">Sign up</button>
      </Form>

      <p>
        Already have an account? <Link to="/login">Log In</Link>
      </p>
    </>
  )
}
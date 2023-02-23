import {useState} from 'react';
import type { MetaFunction } from "@remix-run/node";
import { createClient } from '@supabase/supabase-js'
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const loader = () => {
  const env = {
    SUPABASE_URL: process.env.SUPABASE_URL!,
    SUPABASE_ANON_TOKEN: process.env.SUPABASE_ANON_TOKEN!,
  };

  return {env};
}

export default function App() {
  const {env} = useLoaderData();
  const [supabase] = useState(() => 
    createClient(
      env.SUPABASE_URL!, 
      env.SUPABASE_ANON_TOKEN!)
  );

  const signUp = () => {
    supabase.auth.signUp({
      email: "sociallogin76@gmail.com",
      password: "super32",
    })
  }

  const signIn = () => {
    supabase.auth.signInWithPassword({
      email: "sociallogin76@gmail.com",
      password: "super32",
    })
  }

  const signOut = () => {
    supabase.auth.signOut();
  }


  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Link to={`/signup`}>Sign Up</Link>
        <Link to={`/signin`}>Sign In</Link>
        <Link to={`signout`}>Sign Out</Link>
        
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

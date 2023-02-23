import { Form } from "@remix-run/react";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import {supabase} from "../lib/helper/supabase-client";
import { auth, sessionStorage } from "~/services/auth.server";


export const action = async ({ request }: ActionArgs) => {
  await auth.logout(request, { redirectTo: "/login" });
};

export default function Dashboard() {
  const [user, setUser] = useState(null);
  

  return (
    <>
      <h1>Dashboard</h1>
      <Form method="post">
        <button>Log Out</button>
      </Form>
      <pre>{JSON.stringify(user,null, 2)}</pre>
    </>
  )
}
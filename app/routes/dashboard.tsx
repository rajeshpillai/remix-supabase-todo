import { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import {supabase} from "../lib/helper/supabase-client";


export default function Dashboard() {
  const [user, setUser] = useState(null);
  

  return (
    <>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(user,null, 2)}</pre>
    </>
  )
}
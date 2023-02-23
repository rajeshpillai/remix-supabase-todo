import { useLoaderData } from "react-router";
import { createClient } from '@supabase/supabase-js'


export const loader = async () => {
  // Create a single supabase client for interacting with your database
  const supabase = createClient(
    process.env.SUPABASE_URL!, 
    process.env.SUPABASE_ANON_TOKEN!);
    
  const {data} = await supabase.from("test").select();
  return {
    data
  }
};

export default function Dashboard() {
  const data = useLoaderData();

  return (
    <>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(data, 2, null)}</pre>
    </>
  )
}
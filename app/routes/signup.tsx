import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js'


export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()


  return (
    <>
      <form>
        <label htmlFor="input-email">Email</label>
        <input id="input-email" type="email" ref={emailRef} />

        <label htmlFor="input-password">Password</label>
        <input id="input-password" type="password" ref={passwordRef} />

        <br />

        <button type="submit">Sign up</button>
      </form>

      <p>
        Already have an account? <Link to="/login">Log In</Link>
      </p>
    </>
  )
}
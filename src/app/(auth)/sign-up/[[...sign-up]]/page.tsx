"use client"
import { SignUp, useSignUp } from '@clerk/nextjs'


export default function SignUpPage() {

  const {signUp} = useSignUp()
  console.log("===============",signUp );

  return(
    <div className='flex justify-center items-center h-screen'>
         <SignUp/>
    </div>
  )
}


import Link from 'next/link'
import React from 'react'


function Home() {

  /* const {user} = useUser()

  console.log(user);

  try {
    const response = axios.post('/api/sign-up', {username:user?.username,email:user?.emailAddresses[0].emailAddress})
    console.log(response);
  } catch (error) {
   console.log(error); 
  } */

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      <div className="hero bg-[url('/images/hero.jpg')] min-h-screen relative">
        <div className="hero-content text-center relative bg-black bg-opacity-50">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Goli Cricket</h1>
            <p className="py-6">
            Track Every Run, Count Every Over, Own Every Match!
            </p>
            <div className='space-x-2'>
            <Link href={'/match-setup'}>
            <button className="btn btn-primary">Get Started</button>
            </Link>
            <Link href={'/quick-match'}>
            <button className="btn btn-primary">Quick Start</button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

import React from 'react'

function Home() {
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
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

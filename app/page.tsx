// create a default langing page for the app

'use client';

import React from 'react'
import { signIn, signOut } from 'next-auth/react';

function Home() {
  return (
    <div className="min-h-screen bg-grey-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md max-w-2xl w-full">
        <h1 className="text-4xl text-center font-bold mb-6">Mindtune</h1>
        <p className="text-gray-600 mb-4">
          Mindtune is a website that helps you keep track of your cognitive health by listening to you speak.
          Every day, you can record a short audio clip of yourself speaking about any topic (audio journal), and the Mindtune algorithms will
          analyze your speech patterns and give you a score based on your pitch, speech rate, and intonation.
        </p>
        <div className="container py-5 px-5 mx-0 min-w-full flex flex-col items-center">
          <button className="bg-sky-900 text-white hover:bg-slate-400 font-bold py-2 px-4 mt-3 rounded"
          onClick={() => signIn('google')}
          >Get Started</button>
        </div>
        
      </div>
    </div>
  )
}

export default Home
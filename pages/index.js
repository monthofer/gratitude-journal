import Head from 'next/head'
import Greeting from '../components/Greeting'
import History from '../components/History'
import Input from '../components/Input'
import GratitudeApp from '../components/GratitudeApp'
import { supabase } from "../utils/supabaseClient"
import { Auth } from '@supabase/ui'

import { useState } from 'react'

export default function Home() { 
  const { user } = Auth.useUser()

  return (
    <div className="bg-green-600 min-h-screen min-w-screen">
      <Head>
        <title>Hello</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="spacer"/>

      <main className="container mx-auto max-w-prose px-4 mt-10">
        {
          user ? (
            <GratitudeApp user={user}/>
          ) : (
            <div className="bg-white">
              <Auth supabaseClient={supabase} socialLayout="horizontal" socialButtonSize="xlarge"/>
            </div>
          )
        }
      </main>
      
      < style jsx> {`
        .spacer{
          height: 40px;
        }
      `} </style>
    </div>
  )
}

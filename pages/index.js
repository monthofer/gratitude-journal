import Head from 'next/head'
import Greeting from '../components/Greeting'
import History from '../components/History'
import Input from '../components/Input'
import { useState } from 'react'

export default function Home() { 
  const [user, setUser] = useState({
    "name": "Sarah Monthofer",
    "email": "monthofer@chapman.edu",
  })

  const [gratitudes, setGratitudes ]= useState(['sunsets', 'burritos', 'the beach'])
  const [hasSubmittedToday, setSubmittedToday] = useState(false)

  
  const addGratitude = (entry) => {
    let newGratitudes = [...gratitudes, entry]
    setGratitudes(newGratitudes)
    setSubmittedToday(true)
  }

  return (
    <div className="bg-green-600 min-h-screen min-w-screen">
      <Head>
        <title>Hello</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="spacer"/>

      <main className="container mx-auto max-w-prose px-4 mt-10">
        <Greeting 
          color="text-pink-400"
          user={user}
          gratitudes={gratitudes}
          hasSubmittedToday={hasSubmittedToday}
        ></Greeting>

        <div className="spacer"/>

        {
          !hasSubmittedToday && <Input handleSubmit = {addGratitude} />
        }
        <div className="spacer"/>
        {
          gratitudes.length > 0 && 
          <History gratitudes={gratitudes} />
        }

        <div class="art"/>
          <svg class="heart" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="pink">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg> 
        <div/> 
        
      </main>
      < style jsx> {`
        .spacer{
          height: 40px;
        }
      `} </style>
    </div>
  )
}

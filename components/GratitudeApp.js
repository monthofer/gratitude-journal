// components/GratitudeApp.js
import Greeting from './Greeting'
import History from './History'
import Input from './Input'
import AddAgain from './AddAgain'
import { Auth } from '@supabase/ui'
import { useEffect, useState } from 'react'
import { supabase } from "../utils/supabaseClient"

export default function GratitudeApp({ user }) { 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [gratitudes, setGratitudes ]= useState([])
  const [hasSubmittedToday, setHasSubmittedToday] = useState(false);

  useEffect(() => { 
    // run the fetch gratitudes() function after initial render of the app 
    fetchGratitudes()
  }, [])

  const fetchGratitudes = async () => {
    // get the gratitudes data from supabase and set value of gratiitudes state to that data 
    let { data: gratitudes, error } = await supabase
    .from('gratitudes')
    .select('entry, date_insert_ts');
    
    if (!error) {
      

      setGratitudes(gratitudes);
      setLoading(false);
    } else {
      console.log(error)
      setLoading(false);
      setError(error);
    }
    console.log();
  };
  

  const addGratitude = async (entry) => {
    const { data, error } = await supabase
    .from('gratitudes')
    .insert([
      { id: user.id, entry: entry  }
      
    ]) 
    setLoading(true);
    if (error) { 
      console.log(error) 
      setError(error);
    } 
    else {
      setGratitudes([...gratitudes, {'entry': entry, 'date_insert_ts': null}])
      setLoading(false);
      setHasSubmittedToday(true);
    }
  } 

  const onAddAnother = () => {
    setHasSubmittedToday(false);
  }

  /*
  const onDelete = (entry) => {
    let index = gratitudes.indexOf(entry);
    let newGratitudes = [...gratitudes]
    newGratitudes.splice(index, 1);
    setGratitudes(newGratitudes)
    if (newGratitudes.length === 0) {
      setHasSubmittedToday(false);
    }
  }
  */

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="bg-green-600 min-h-screen min-w-screen">
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

      </main>
      < style jsx> {`
        .spacer{
          height: 40px;
        }
      `} </style>
    </div>
  )


}

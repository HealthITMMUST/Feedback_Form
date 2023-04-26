import React from 'react'
import {useEffect, useState} from'react'
import {useParams} from'react-router-dom'

const SingleFeed = ({about}) => {

    about = useParams()
    console.log(about.id)
    let [note, setNote] = useState(null);
    useEffect(() => {
      getNote();
    }, []);
    let getNote = async () => {
      const response = await fetch(`/api/feedback/{${about.id}}/`);
      console.log(response);
      const data = await response.json();
      console.log(data);
      setNote(data);
    };
  
    
  return (
    <div > 
      <h1>{note?.name}</h1>
    </div>
  )
}

export default SingleFeed
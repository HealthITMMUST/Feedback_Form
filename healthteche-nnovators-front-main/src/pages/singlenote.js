import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const SingleNote = ({ sth }) => {
  sth = useParams();
  console.log(sth.id);
 
  let [note, setNote] = useState(null);
  useEffect(() => {
    getNote();
  }, [sth.id]);
  let getNote = async () => {
    const response = await fetch(`/api/notes/${sth.id}/`);
    console.log(response);
    const data = await response.json();
    console.log(data);
    setNote(data);
  };

  console.log(sth);
  return (
    <div>
      <h1>{note?.body}</h1>
      <textarea defaultValue={note?.body} name="de" id="" cols="30" rows="10"></textarea>
    </div>
  );
};

export default SingleNote;

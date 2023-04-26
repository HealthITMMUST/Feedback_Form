 
import { useState, useEffect } from "react";
import ListItem from "./item";
import Chart from "../pages/feedbackstats";
function AllNotes() {
  const [images, setImages] = useState([]);
  

  useEffect(() => {
    getNotes();
  }, []);
  let getNotes = async () => {
    const response = await fetch(`/api/feedbacks/`);
    const data = await response.json();
    console.log(data.length);
    setImages(data);
  };

  return (
    <div className="App">
      {images.map((image) => (
        <div key={image.id}>
        <ListItem  note={image} />
        </div>
        
      ))}
      <Chart /> 
    </div>
  );
}

export default AllNotes;

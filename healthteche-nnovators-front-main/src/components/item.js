import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ note }) => {
  return (
    <div>
    <Link to={`feedback/${note.id}`}>  <h3 className="font-bold">{note.body}</h3></Link>
    <p>{`${note.name}`}</p>
    </div>
  );
};

export default ListItem;

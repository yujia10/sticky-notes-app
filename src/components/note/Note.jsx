import React from "react";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import './note.css'

function Note({id,title,content,onChecked}) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button
        onClick={() => {
          onChecked(id);
        }}
      >
        <RemoveCircleIcon />
      </button>
    </div>
  );
}

export default Note;

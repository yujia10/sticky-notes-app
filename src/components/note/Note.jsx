import React from "react";
import './note.css'
import {BsFillTrashFill} from 'react-icons/bs'
import {AiFillEdit} from 'react-icons/ai'

const Note = ({id,title,content,onChecked,editNote}) => {
  return (
    <div className="note-container">
      <div className="note">
        <h1>{title}</h1>
        <p>{content}</p>
        <div className="button-group">
          <button
            onClick={() => {
              onChecked(id);
            }}
          >
          <BsFillTrashFill />
          </button>
          <button onClick={()=>{
            editNote(id);
            }}>
            <AiFillEdit/>
          </button>
        </div>
      </div>
     </div>
  );
}

export default Note;

import React, { useState } from "react";
import './createArea.css'
import {IoIosAddCircle} from 'react-icons/io'

const CreateArea = ({addNote, clearAll, isEditing, show, type, msg}) => {
  const [isExpanded, setExpanded] = useState(false);

  const expand = () => {
    setExpanded(true);
  }

  const [input, setInput] = useState({
    title: "",
    content: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  const handleSubmit = (event) => {
    addNote(input);
    event.preventDefault();
    setInput({
      title: "",
      content: ""
    });
  }


  return (
    <div>
      <form className="create-note">

        {isExpanded && (
          <>
          <button className="btn-clear" onClick={clearAll}>clear all</button>
          <input
            onChange={handleChange}
            name="title"
            value={input.title}
            placeholder="Title"
          />
          </>
        )}
        <textarea
          onChange={handleChange}
          onClick={expand}
          name="content"
          value={input.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        {isEditing && (
          <p className='edit-status'>editing... click + to update</p>
        )}
        {show && (
          <p className={`alert alert-${type}`}>{msg}</p>
        )}
        {isExpanded && (
          <button className='btn-add' onClick={handleSubmit}>
            <IoIosAddCircle/>
          </button>
        )}
      </form>
    </div>
  );
}

export default CreateArea;

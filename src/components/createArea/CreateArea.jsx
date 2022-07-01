import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import './createArea.css'

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  function expand() {
    setExpanded(true);
  }

  const [input, setInput] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function handleSubmit(event) {
    props.onAdd(input);
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
          <input
            onChange={handleChange}
            name="title"
            value={input.title}
            placeholder="Title"
          />
        )}
        <textarea
          onChange={handleChange}
          onClick={expand}
          name="content"
          value={input.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={handleSubmit}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

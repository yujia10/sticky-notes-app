import React, { useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Note from "./components/note/Note";
import CreateArea from "./components/createArea/CreateArea";

function App() {
  const [note, setNote] = useState([]);

  function addNote(input) {
    setNote((prevNotes) => {
      return [...prevNotes, input];
    });
  }

  function deleteNote(id) {
    setNote((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {note.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onChecked={deleteNote}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;

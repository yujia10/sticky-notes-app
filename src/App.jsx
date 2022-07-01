import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Note from "./components/note/Note";
import CreateArea from "./components/createArea/CreateArea";

const getLocalStorage = () => {
  let note = localStorage.getItem('note');
  if (note) {
    return (note = JSON.parse(localStorage.getItem('note')));
  } else {
    return [];
  }
};

const App = ()=> {
  const [note, setNote] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditID] = useState(null);

  useEffect(() => {
    localStorage.setItem('note', JSON.stringify(note));
  }, [note]);

  const addNote = (input)=> {
    if (isEditing){
      setNote(
        note.map((item,index)=>{
          if(index === editId){
            return input;
          }else{
            return item;
          }
        })
      );
      setEditID(null);
      setIsEditing(false);
    } else {
      setNote((prevNotes) => {
        return [...prevNotes, input];
      });
  }
  }

  const deleteNote = (id)=> {
    setNote((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  }

  const editNote = (id) => {
    setIsEditing(true);
    setEditID(id);
  }

  const clearAll = ()=>{
    setNote([])
  }

  return (
    <div className="page-container">
      <div className="content-wrap">
        <Header />
        <CreateArea addNote={addNote} clearAll={clearAll} isEditing={isEditing}/>
        <div className="task-container">
          {note.map((noteItem, index) => (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onChecked={deleteNote}
              editNote={editNote}
            />
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;

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
  const [alert, setAlert] = useState({show: false, msg:'', type:''})

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
      showAlert(true, 'task updated successfully', 'success')
    } else {
      showAlert( true, 'task added to the list', 'success')
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
    showAlert(true, 'task removed', 'danger')
  }

  const editNote = (id) => {
    setIsEditing(true);
    setEditID(id);
  }

  const clearAll = ()=>{
    setNote([])
    showAlert(true, 'empty list','danger')
  }

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [note]);

  return (
    <div className="page-container">
      <div className="content-wrap">
        <Header />
        <CreateArea addNote={addNote} clearAll={clearAll} isEditing={isEditing} {...alert}/>
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

import React, { useState } from "react";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Footer from "./Footer"

function App() {

  const [keep, setKeep] = useState([]);

  function addNote(notes) {
    setKeep(prevNotes => {
      return [...prevNotes, notes]
    })
  }

  function deleteNote(id) {
    setKeep(prevNotes => {
      return (
        prevNotes.filter((items, index) => 
        index !== id)
      )
    })
  }

  return (
    <>
    <header>
      <h1>Note!t</h1>
    </header>
    <CreateArea 
    add={addNote} />
    {keep.map((items, index) => 
    {return (
      <Note 
      key={index}
      id={index}
      title={items.title}
      content={items.content}
      cut={deleteNote} />
    )}
    )}
    <Footer />
    </>
  );
}

export default App;

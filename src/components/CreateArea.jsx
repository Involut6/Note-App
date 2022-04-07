import React, { useState } from "react";

function CreateArea(props) {
    const [main, setMain] = useState({
        title: "",
        content: ""
    });

    const [collapse, setCollapse] = useState(false);

    function handleChange(event) {
        const {name, value} = event.target
        setMain(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function submitNote(event) {
        props.add(main);
        setMain({
          title: "",
          content: ""
        });
        event.preventDefault();
      }

      function isTrue() {
          setCollapse(true);
      }
    return (
        <form>
            <input 
            name="title" 
            type="text" 
            onChange={handleChange}
            onClick={isTrue}
            placeholder="Note Title" 
            value={main.title}></input>
            {collapse? <textarea 
            name="content" 
            type="text" rows="3" 
            onChange={handleChange}
            placeholder="Note Content" 
            value={main.content}></textarea>: null}
            <button onClick={submitNote} type="submit">Add</button>
        </form>
    )
}

export default CreateArea;
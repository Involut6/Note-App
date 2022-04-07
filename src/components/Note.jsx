import React from "react";

function Note(props) {

    function onCut() {
        props.cut(props.id);
    }

    return (
        <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={onCut} 
        type="button">Cut</button>
    </div>)
}

export default Note;
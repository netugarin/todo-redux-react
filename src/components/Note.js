import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {deleteNoteAction} from "../redux/actions/noteActions";

const Note = (props) => {
    const dispatch = useDispatch()
    const [note, setNote] = useState(props.note)

    const deleteNote = (id) => {
        dispatch(deleteNoteAction(id))
    }

    return (
        <div className='note'>
            <h2 className="note--text">{note.text}</h2>
            <button className="btn btn_delete item" onClick={() => deleteNote(note.id)}>
                Delete
            </button>
        </div>
    );
};

export default Note;
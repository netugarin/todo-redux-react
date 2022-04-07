import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {nanoid} from "nanoid";
import {addNoteAction} from "../redux/actions/noteActions";
import Note from "./Note";

const NotesList = () => {
    const dispatch = useDispatch()
    const notes = useSelector(state => state.notes.notes)
    const [note, setNote] = useState("")

    const addNote = () => {
        const newNote = {
            text: note,
            id: nanoid()
        }
        dispatch(addNoteAction(newNote))
        setNote('')
    }

    const handleChange = (event) => {
        setNote(prevNote => {
            return event.target.value
        })
    }

    const notesArray = notes.map(note => <Note note={note} key={note.id}/>)

    return (
        <div className="note--adding">
            <div className='notes-list'>
                <input
                    type="text"
                    value={note}
                    name="note"
                    onChange={handleChange}
                    className="note--input"
                    maxLength='40'
                />
                <button onClick={() => addNote()} className="btn btn_add">Create note</button>
            </div>
            {notesArray}
        </div>

    );
};

export default NotesList;
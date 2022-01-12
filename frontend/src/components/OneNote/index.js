import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { deleteNote, getOneNote } from "../../store/note";
import "./oneNote.css"

const OneNote = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { noteId } = useParams();
    const note = useSelector(state => state.note[noteId])
    console.log("NOTE", note)
    // const notteeeesss = [...notes]
    // console.log("this is note", note)
    // const notesArr = Object.values(notes);
    // console.log(notesArr)
    useEffect(() => {
        dispatch(getOneNote(noteId));
    }, [dispatch, noteId]);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(deleteNote(noteId))
        history.push('/notes')
    }

    return (
        <div>
            <h2>{note?.title} <br></br>
                {note?.id}<br></br>
                {note?.content}</h2>
            <button id="delete-note-btn" onClick={handleSubmit}>Delete Note</button>

        </div>
    )
}

export default OneNote;

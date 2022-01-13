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
    // console.log("NOTE component", note)
    // const notteeeesss = [...notes]
    // console.log("this is note", note)
    // const notesArr = Object.values(notes);
    // console.log(notesArr)
    useEffect(() => {
        dispatch(getOneNote(noteId));
    }, [dispatch, noteId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dis = await dispatch(deleteNote(noteId))
        if (dis) {
            history.push('/notes')
        }
    }

    const handleEdit = async(e) => {
        e.preventDefault();
        history.push(`/${noteId}/edit`)
    }

    return (
        <div>
            <h2>{note?.title} <br></br>
                {note?.id}<br></br>
                {note?.content}</h2>
            <button id="delete-note-btn" onClick={handleSubmit}>🗑️</button>
            <button id="delete-note-btn" onClick={handleEdit}>Edit</button>


        </div>
    )
}

export default OneNote;

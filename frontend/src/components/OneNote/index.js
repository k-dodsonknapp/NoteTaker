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

    const handleEdit = async (e) => {
        e.preventDefault();
        history.push(`/${noteId}/edit`)
    }

    return (
        <div className="page">
            <div className="another-one">
                <div className="sticky-note-div">
                    <div className="h2-div">
                        <h2>{note?.title} <br></br>
                            {note?.content}</h2>
                    </div>
                    <div className="buttonss">
                        <div className="delete-trash-can" >
                            <label htmlFor="delete-note-btn">Delete? </label>
                            <button id="delete-note-btn" onClick={handleSubmit}>🗑️</button>
                        </div>
                        <button id="delete-note-btn" onClick={handleEdit}>Edit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OneNote;

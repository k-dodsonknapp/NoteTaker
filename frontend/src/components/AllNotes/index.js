import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { deleteNote, getAllNotes } from "../../store/note";
import AddOneNote from "../AddNoteForm";
// import OneNote from "../OneNote";
import "./allNotes.css"


const AllNotes = () => {
    const dispatch = useDispatch();
    const notes = useSelector(state => Object.values(state.note).reverse())
    const sessionUser = useSelector(state => state.session.user)

    useEffect(() => {
        dispatch(getAllNotes());
    }, [dispatch]);

    return (
        <div className="page">
            <div className="headline-two">
                <h2>All Notes</h2>
            </div>
            <ul className="note-cards">
                {notes?.map(note => (
                    <div className="idk" key={note.id}>
                        {(sessionUser.id === note.userId || sessionUser.username === 'Demo-lition') &&
                            <div className="li-div">
                                <NavLink className="note-links" style={{ color: 'black', textDecoration: "none" }} to={`/notes/${note.id}`}>
                                    <li className="lis">
                                        {note?.title}
                                        <div className="note-content">
                                            {note?.content}
                                            <br />
                                        </div>
                                    </li>
                                </NavLink>
                            </div>
                        }
                    </div>
                ))}
            </ul>
            <div hidden={true}>
                <AddOneNote />
            </div>
        </div>
    )
}

export default AllNotes;

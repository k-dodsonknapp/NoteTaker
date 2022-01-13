import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";

import { deleteNote, getAllNotes } from "../../store/note";
// import OneNote from "../OneNote";
import "./allNotes.css"


const AllNotes = () => {
    const dispatch = useDispatch();
    const notes = useSelector(state => Object.values(state.note).reverse())

    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user)

    useEffect(() => {
        dispatch(getAllNotes());
    }, [dispatch]);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(deleteNote(notes.map(note => note.id)))
        history.push('/notes')
    }

    return (
        <div>
            <div className="headline-two">
                <h2>These are your Notes</h2>
            </div>
            <ul>
                {notes?.map(note => (
                    <div key={note.id}>
                        {sessionUser.id === note.userId &&
                            <div className="li-div">
                                <NavLink className="note-links" style={{ color: 'black', textDecoration: "none" }} to={`/notes/${note.id}`}>
                                    <li className="lis">
                                        {note?.title}
                                        <div className="note-content">
                                            {note?.content}
                                            <br />
                                            {note.userId}
                                        </div>
                                    </li>
                                </NavLink>
                            </div>
                        }
                    </div>
                ))}

            </ul>
        </div>
    )
}

export default AllNotes;

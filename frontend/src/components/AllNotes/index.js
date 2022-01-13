import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";

import { deleteNote, getAllNotes } from "../../store/note";
import OneNote from "../OneNote";
import "./allNotes.css"


const AllNotes = () => {
    const dispatch = useDispatch();
    const notes = useSelector(state => Object.values(state.note))
    // notes.
    // console.log("ALL NOTES", notes)
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user)
    console.log("SESSION USER", sessionUser)
    console.log()
    // const notteeeesss = [...notes]
    // console.log("this is notes", notes)
    // const notesArr = Object.values(notes);
    // console.log(notesArr)
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
            <h2>This is something</h2>
            <ul>
                {notes?.map(note => (
                            <div key={note.id} className="li-div">
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
                ))}
            </ul>
        </div>
    )
}

export default AllNotes;

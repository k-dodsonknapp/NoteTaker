import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";

import { deleteNote, getAllNotes } from "../../store/note";
import "./allNotes.css"


const AllNotes = () => {
    const dispatch = useDispatch(); 
    const notes = useSelector(state => state.note.list)
    const history = useHistory();
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
                    <div className="li-div">
                        <NavLink className="note-links" style={{ color: 'black', textDecoration: "none" }} to={`/notes/${note.id}`}>
                            <li key={note.id} className="lis">
                                {note?.title}
                                <div className="note-content">
                                    {note?.content}
                                </div>
                            </li>
                        </NavLink>
                        <button onClick={handleSubmit}>Delete Note</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default AllNotes;

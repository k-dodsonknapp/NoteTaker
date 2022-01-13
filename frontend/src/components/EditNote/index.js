import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { editNote } from '../../store/note';

import './editNote.css'


const EditNote = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const session = useSelector(state => state.session)
    const {noteId} = useParams();
    const note = useSelector(state => state.note[noteId])
    // console.log("NOTE ID", note)
    // console.log("SESSION",  session)
    // const notes = useSelector(state => Object.values(state.note[noteId]))

    const userId = session.user.id
    const notebookId = session.user.id
//     notes.map(note => note.title)
// notes.map(note => note.content)
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);
    // const [note]
    const [errors, setErrors] = useState([])

    useEffect(() => {
        const err = [];
        if(title.length < 3) err.push('Name must be longer 3 characters')
        if(title.length > 45) err.push('Name must be 45 characters or less')
        // fruits.map(fruit => {
        //   if (fruit.name === name) err.push('Name already exists.')
        // })
        // if (co < 1 || sweetness > 10) err.push(
        //   "Sweetness must be between 1 and 10"
        // )
        setErrors(err)
      }, [title, content])


    const handleSubmit = async (e) => {
        e.preventDefault();

        const list = {
            id: noteId,
            title,
            content,
            notebookId,
            userId,
        }

        // let newNote;
        // console.log(newNote)
        // try {
        const newNote = await dispatch(editNote(list));
        // console.log("NEW NOTE",newNote)
        // }catch (e) {
        // throw new Error("The note was not made");
        // }
        history.push("/notes")
    }

    // const handleInputValue = () => {
    //     if (e.target.value === "" ||
    //         e.target.value === " " ||
    //         e.target.value === "  ") {
    //             set
    //         }
    // }

    useEffect(() => {
        // history.push("/notes")
    }, [])

    return (
        <div className="form">
            <h1>Edit Note</h1>
            <ul>
                {errors.map( err => (
                    <li key={err}>
                        {err}
                    </li>
                ))}
            </ul>
            <div className="note-form">
                <form onSubmit={handleSubmit} >
                    <label> Note Title:
                        <input
                            type="text"
                            placeholder="Note"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        ></input>
                    </label>
                    <label>What is Noteworthy?
                        <textarea
                            type="text"
                            placeholder="Your Note"
                            value={content}
                            onChange={e => setContent(e.target.value)}
                        ></textarea>
                    </label>
                    <button type="submit"
                    onClick={handleSubmit}
                    >Edit Note </button>
                    <button type="submit">Cancel</button>
                </form>
            </div>
        </div>
    )
}


export default EditNote;
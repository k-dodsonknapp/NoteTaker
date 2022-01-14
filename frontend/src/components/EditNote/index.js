import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { editNote } from '../../store/note';

import './editNote.css'


const EditNote = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const session = useSelector(state => state.session)
    const { noteId } = useParams();
    const note = useSelector(state => state.note[noteId])
    const userId = session.user.id
    const notebookId = 1
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);
    const [errors, setErrors] = useState([])

    useEffect(() => {
        const err = [];
        if (title.length < 3) err.push('Title must be longer 3 characters')
        if (title.length > 45) err.push('Title must be 45 characters or less')
        if (content.length < 3) err.push('Content must be longer 3 characters')
        if (content.length > 45) err.push('Content must be 45 characters or less')
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

        const newNote = await dispatch(editNote(list));
        history.push("/notes")
    }

    const handleCancel = (e) => {
        e.preventDefault();
        history.push('/notes')
    }

    return (
        <div className="form">
            <div className='left-container'>
                <h2></h2>
            </div>
            <div className='middle-container'>
                <h2>Edit your note!</h2>
                <ul className='errors'>
                    {errors.map(err => (
                        <li className='errors-li' key={err}>
                            {err}
                        </li>
                    ))}
                </ul>
                <div className="notes-form">
                    <form onSubmit={handleSubmit} >
                        <div className='title-div'>
                            <input
                                className='input-title'
                                type="text"
                                placeholder="Note"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            ></input>
                        </div>
                        <div className='content-div'>
                            <textarea
                                className='edit-content'
                                // style={{resize: "none"}}
                                type="text"
                                placeholder="Your Note"
                                value={content}
                                onChange={e => setContent(e.target.value)}
                            ></textarea>
                        </div>
                        <div className='button-div'>
                            <button className='edit-btn' type="submit"
                                onClick={handleSubmit}
                            >Edit Note </button>
                            <button className='cancel-btn' onClick={handleCancel} >Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='right-container'>
                <h3></h3>
            </div>
        </div>
    )
}


export default EditNote;
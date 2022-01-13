// const { useState, useEffect } = require("react");
import { useState, useEffect } from "react";
// const { useDispatch, useSelector } = require("react-redux");
import { useDispatch, useSelector } from "react-redux";
// const { useHistory } = require("react-router-dom");
import { useHistory } from "react-router-dom";
// const { addNote } = require("../../store/note");
import { addNote } from "../../store/note";
import "./noteForm.css"

const AddOneNote = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const session = useSelector(state => state.session)

    const userId = session.user.id
    const notebookId = Math.floor(Math.random() * 5)
    // console.log(notebookId)

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    // const [note]
    const [errors, setErrors] = useState([])

    useEffect(() => {
        const err = [];
        if (title.length < 3) err.push('Name must be longer 3 characters')
        if (title.length > 45) err.push('Name must be 45 characters or less')
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
            title,
            content,
            notebookId: notebookId,
            userId,
        }

        // let newNote;
        // console.log(newNote)
        // try {
        const newNote = await dispatch(addNote(list));
        // console.log("NEW NOTE",newNote)
        // }catch (e) {
        // throw new Error("The note was not made");
        // }
        history.push("/notes")
    }

    const handleCancel = (e) => {
        e.preventDefault();
        history.push('/notes')
    }


    return (
        <div>
            <div className="whole-page">

                <div className="left-container">

                    <h1>New Note</h1>

                </div>
                <div className="middle-container">
                    <ul className="unordered-errors">
                        {errors.map(err => (
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
                                    className="idk"
                                    style={{ resize: "none" }}
                                    type="text"
                                    placeholder="Your Note"
                                    value={content}
                                    onChange={e => setContent(e.target.value)}
                                ></textarea>
                            </label>
                            <button type="submit"
                                onClick={handleSubmit}>Create new </button>
                            <button onClick={handleCancel} type="submit">Cancel</button>
                        </form>
                    </div>
                </div>
                <div className="right-container"></div>
            </div>
        </div>
    )
}


export default AddOneNote;

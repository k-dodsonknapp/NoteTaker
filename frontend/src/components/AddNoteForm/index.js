const { useState, useEffect } = require("react");
const { useDispatch, useSelector } = require("react-redux");
const { useHistory } = require("react-router-dom");
const { addNote } = require("../../store/note");

const AddOneNote = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const session = useSelector(state => state.session)

    const userId = session.user.id
    const notebookId = session.user.id

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    // const [note]
    const [errors, setErrors] = useState([])

    useEffect(() => {
        const err = [];
        // if(title.length < 3) err.push('Name must be longer 3 characters')
        // if(title.length > 45) err.push('Name must be 20 characters or less')
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
            notebookId,
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
            <h1>New Note</h1>
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
                        <input
                            type="text"
                            placeholder="Your Note"
                            value={content}
                            onChange={e => setContent(e.target.value)}
                        ></input>
                    </label>
                    <button type="submit"
                    onClick={handleSubmit}
                    >Create new </button>
                    <button type="submit">Cancel</button>
                </form>
            </div>
        </div>
    )
}


export default AddOneNote;

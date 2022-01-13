import { csrfFetch } from './csrf'
const GET_ALL_NOTES = 'notes/GET_ALL_NOTES'
const GET_NOTE = 'notes/GET_NOTE'
const ADD_NOTE = 'notes/ADD_NOTE'
const EDIT_NOTE = 'notes/EDIT_NOTE'
const DELETE_NOTE = 'notes/DELETE_NOTE'

//Gets all notes
const getNotes = list => ({
    type: GET_ALL_NOTES,
    list,
})

export const getAllNotes = () => async (dispatch) => {
    const response = await csrfFetch(`/api/notes`);
    // console.log("Response", response)

    if (response.ok) {
        const notes = await response.json();
        dispatch(getNotes(notes));
    }
};

// get a note function
// const addANote = note => ({
//     type: GET_NOTE,
//     note,
// })

const getANote = list => ({
    type: GET_NOTE,
    list,
})

// export const getOneNote = (id) => async (dispatch) => {
//     const res = await csrfFetch(`/api/notes/${id}`)
//     if (res.ok) {
//         const note = await res.json();
//         // if (note) {
//             dispatch(addANote(note))
//         // }
//     }
// }

export const getOneNote = (id) => async dispatch => {
    const response = await csrfFetch(`/api/notes/${id}`)

    if (response.ok) {
        const note = await response.json()
        console.log("THUNK...............", note)
        //......
        dispatch(getANote(note))
    }
}
//------------------------------------------------------------------
//Adds a note
const addANote = list => ({
    type: ADD_NOTE,
    list
})

// add note function

// export const addNote = (list) => async dispatch => {
//     // console.log(list)
//     const response = await csrfFetch(`api/notes/new`, {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(list)
//     })
//     if(!response.ok) {
//         let error = await response.json()
//         return error
//     }
//     const lists = await list.json()
//     await dispatch(addANote(lists));
//     return lists;
// }
export const addNote = (noteList) => async (dispatch) => {
    // console.log(noteList)
    const response = await csrfFetch(`/api/notes`, {
        method: 'POST',
        body: JSON.stringify(noteList)
    });

    if (response.ok) {
        const note = await response.json();
        dispatch(addANote(note));
        return note;
    }
};

//------------------------------------------------------------------
//Adds edits a note
const editNotes = note => ({
    type: EDIT_NOTE,
    note
})
//edit note function
//------------------------------------------------------------------
// Deletes a note
const deleteANote = id => ({
    type: DELETE_NOTE,
    id
})
// delete note function

export const deleteNote = (id) => async dispatch => {
    const res = await csrfFetch(`/api/notes/${id}`, {
        method: "DELETE",
    })
    if (res.ok) {
        const note = await res.json();
        console.log("Thunk Note", note)
        await dispatch(deleteANote(note.id))
        return note;
    }
}
//------------------------------------------------------------------

const intitalState = { list: [] }

const noteReducer = (state = intitalState, action) => {
    // console.log("INITIAL ACTION", action)
    switch (action.type) {
        case GET_ALL_NOTES:
            const allNotes = {};
            action.list.forEach(note => {
                allNotes[note.id] = note;
            });
            // console.log("ACTION", action)
            return {
                ...allNotes,
                ...state.list,
                list: action.list
            }
        case GET_NOTE: {
            const newState = {
                ...state,
                [action.list.id]: action.list
            };
            return newState;
        }
        // case ADD_NOTE: {
        //     if (!state[action.list.id]) {
        //         const newState = {
        //             ...state,
        //             [action.list.id]: action.list
        //         };
        //         const noteList = newState.list.map(id => newState[id]);
        //         noteList.push(action.list);
        //         newState.list = action.list
        //         return newState;
        //     }
        case ADD_NOTE: {
            return {
                ...state,
                [action.list.id]: {
                    ...state[action.list.id],
                    ...action.list,
                    // [action.list.id]: action.list
                }
            }
        }
        case DELETE_NOTE: {
            const newState = { ...state, list:[...state.list] };
            console.log("before newState", newState)
            delete newState[action.id];
            console.log("after newState", newState);
            return newState;
        }
        default:
            return state;
    }
}
export default noteReducer;

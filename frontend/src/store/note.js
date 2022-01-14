import { csrfFetch } from './csrf'
const GET_ALL_NOTES = 'notes/GET_ALL_NOTES'
const GET_NOTE = 'notes/GET_NOTE'
const ADD_NOTE = 'notes/ADD_NOTE'
const EDIT_NOTE = 'notes/EDIT_NOTE'
const DELETE_NOTE = 'notes/DELETE_NOTE'

const getNotes = list => ({
    type: GET_ALL_NOTES,
    list,
})

export const getAllNotes = () => async (dispatch) => {
    const response = await csrfFetch(`/api/notes`);

    if (response.ok) {
        const notes = await response.json();
        dispatch(getNotes(notes));
    }
};

const getANote = list => ({
    type: GET_NOTE,
    list,
})

export const getOneNote = (id) => async dispatch => {
    const response = await csrfFetch(`/api/notes/${id}`)

    if (response.ok) {
        const note = await response.json()
        dispatch(getANote(note))
    }
}

const addANote = list => ({
    type: ADD_NOTE,
    list
})

export const addNote = (noteList) => async (dispatch) => {
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

const editNotes = note => ({
    type: EDIT_NOTE,
    note
})

export const editNote = (data) => async (dispatch) => {
    const response = await csrfFetch(`/api/notes/${data.id}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
if (response.ok) {
        const note = await response.json();
        dispatch(editNotes(note));
        return note;
    }
};

const deleteANote = id => ({
    type: DELETE_NOTE,
    id
})

export const deleteNote = (id) => async dispatch => {
    const res = await csrfFetch(`/api/notes/${id}`, {
        method: "DELETE",
    })
    if (res.ok) {
        const note = await res.json();
        await dispatch(deleteANote(note.id))
        return note;
    }
}

const intitalState = {}

const noteReducer = (state = intitalState, action) => {
    switch (action.type) {
        case GET_ALL_NOTES:
            const allNotes = {};
            action.list.forEach(note => {
                allNotes[note.id] = note;
            });
            return {
                ...allNotes,
            }
        case GET_NOTE: {
            const newState = {
                ...state,
                [action.list.id]: action.list
            };
            return newState;
        }
        case ADD_NOTE: {
            return {
                ...state,
                [action.list.id]: {
                    ...state[action.list.id],
                }
            }
        }
        case DELETE_NOTE: {
            const newState = { ...state };
            delete newState[action.id];
            return newState;
        }
        case EDIT_NOTE: {
            return {
                ...state,
                [action.note.id]: action.note
            }
        }
        default:
            return state;
    }
}
export default noteReducer;

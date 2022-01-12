// import { csrfFetch } from './csrf'
// const GET_ALL_NOTES = 'notes/getNotes'
// const GET_NOTE = 'notes/getNote'
// const ADD_NOTE = 'notes/addNote'
// const EDIT_NOTE = 'notes/editNote'
// const DELETE_NOTE = 'notes/deleteNote'
// //Gets all notes
// const getNotes = notes => ({
//     type: GET_ALL_NOTES,
//     notes,
// })
// // get notes function
// const getAllNotes = (id) => async(dispatch) => {
//     const res = await csrfFetch(`/api/notes/${id}`)
//     if(res.ok) {
//         const note = await res.json();
//         if(note) {
//             dispatch(getNotes(note))
//         }
//     }
// }
// //------------------------------------------------------------------
// //Adds a note
// const addNote = note => ({
//     type: ADD_NOTE,
//     note,
// })
// // add note function
// const addANotebook = note => ({
//     type:ADD_NOTE,
//     note,
// })
// //------------------------------------------------------------------
// //Adds edits a note
// const editNotebook = note => ({
//     type: EDIT_NOTE,
//     note
// })
// //edit note function
// //------------------------------------------------------------------
// // Deletes a note
// const deleteNotebook = note => ({
//     type: DELETE_NOTE,
//     note
// })
// // delete note function
// //------------------------------------------------------------------
// const notebookReducer = (state = {}, action) => {

// }
// export default noteReducer;

export const ADD_NOTE = 'ADD_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'

export const addNoteAction = (payload) => ({type: ADD_NOTE, payload})
export const deleteNoteAction = (payload) => ({type: DELETE_NOTE, payload})
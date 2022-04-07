import {ADD_NOTE, DELETE_NOTE} from "../actions/noteActions";

const defaultState = {
    notes: []
}

export const noteReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_NOTE:
            return {...state, notes: [...state.notes, action.payload]}
        case DELETE_NOTE:
            return {...state, notes: state.notes.filter(note => note.id !== action.payload)}
        default:
            return state
    }
}
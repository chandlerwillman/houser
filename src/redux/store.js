import { createStore } from 'redux';

var initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    img: '',
    monthlyMortgage: 0,
    desiredRent: 0
}

const UPDATE_FIELD = 'UPDATE_FIELD'
const CLEAR_FIELDS = 'CLEAR_FIELDS'

export function updateField(field, payload) {
    return {
        type: UPDATE_FIELD, 
        field,
        payload
    }
}

export function clearFields() {
    return {
        type: CLEAR_FIELDS
    }
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_FIELD:
            return {
                ...state,
                [action.field]: `${action.payload}`
            }
        case CLEAR_FIELDS:
            return {
                ...initialState
            }
        default:
            return state
    }
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
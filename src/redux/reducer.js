const initialState = {
    cat: {},
    catsList: []
}

const SET_CATS_LIST = "SET_CATS_LIST";
const LOGGED_IN = "LOGGED_IN";
const LOGGED_OUT = "LOGGED_OUT";

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case SET_CATS_LIST:
            return {...state, catsList: action.payload}
        case LOGGED_IN:
            return {...state, user: action.payload}
        case LOGGED_OUT:
            return {...state, user: null};
        default:
            return {...state}
    }
}

export function setCatsList(catsList) {
    return {
        type: LOGGED_OUT,
        action: catsList
    } 
}

export function login(user) {
    return {
        type: LOGGED_OUT,
        action: user
    } 
}

export function logOut() {
    return {
        type: LOGGED_OUT
    } 
}
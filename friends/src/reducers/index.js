import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger";
import thunk from "redux-thunk";
import { AXIOS_FAILURE, AXIOS_START, AXIOS_SUCCESS } from "../actions";

const initialState = {
    friends: [{
        id: 1,
        name: "Joe",
        age: 24,
        email: "joe@lambdaschool.com"
    }],
    isFetching: false,
    error: ""
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case AXIOS_START:
            return {
                ...state,
                error: "",
                isFetching: true
            }
        case AXIOS_SUCCESS:
            return {
                ...state,
                friends: [action.payload],
                error: "",
                isFetching: false,
            }
        case AXIOS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(thunk, logger));
export { reducer, store }
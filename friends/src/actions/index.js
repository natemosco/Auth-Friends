import axios from "axios";

export const AXIOS_START = "AXIOS_START";
export const AXIOS_SUCCESS = "AXIOS_SUCCESS";
export const AXIOS_FAILURE = "AXIOS_FAILURE";

export const axiosGet = (id) => dispatch => {
    dispatch({ type: AXIOS_START });
    let url = (id) ? `http://localhost:5000/api/friends/${id}` : "http://localhost:5000/api/friends";
    axios
        .get(url)
        .then(response => {
            console.log(response);
            dispatch({ type: AXIOS_SUCCESS, payload: response.data })
        })
        .catch(error => {
            console.log("error from get axios", error);
            dispatch({ type: AXIOS_FAILURE, payload: `${error.response.status} ${error.response.data}` })
        })
}

export const newLogin = (user) => dispatch => {
    dispatch({ type: AXIOS_START });
    axios
        .post("http://localhost:5000/api/login", user)
        .then(response => {
            console.log(response);
            dispatch({ type: AXIOS_SUCCESS, payload: response.data })
        })
        .catch(error => {
            console.log("error from get axios", error);
            dispatch({ type: AXIOS_FAILURE, payload: `${error.response.status} ${error.response.data}` })
        })
}

export const addUser = (user) => dispatch => {
    dispatch({ type: AXIOS_START });
    axios
        .post("http://localhost:5000/api/friends", user)
        .then(response => {
            console.log(response);
            dispatch({ type: AXIOS_SUCCESS, payload: response.data })
        })
        .catch(error => {
            console.log("error from get axios", error);
            dispatch({ type: AXIOS_FAILURE, payload: `${error.response.status} ${error.response.data}` })
        })
}

export const deleteUser = (user) => dispatch => {
    dispatch({ type: AXIOS_START });
    axios
        .put(`http://localhost:5000/api/friends/:${id}`)
        .then(response => {
            console.log(response);
            dispatch({ type: AXIOS_SUCCESS, payload: response.data })
        })
        .catch(error => {
            console.log("error from get axios", error);
            dispatch({ type: AXIOS_FAILURE, payload: `${error.response.status} ${error.response.data}` })
        })
}

export const updateUser = (user) => dispatch => {
    dispatch({ type: AXIOS_START });
    axios
        .put(`http://localhost:5000/api/friends/:${id}`, user)
        .then(response => {
            console.log(response);
            dispatch({ type: AXIOS_SUCCESS, payload: response.data })
        })
        .catch(error => {
            console.log("error from get axios", error);
            dispatch({ type: AXIOS_FAILURE, payload: `${error.response.status} ${error.response.data}` })
        })
}
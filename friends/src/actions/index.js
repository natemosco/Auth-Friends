import { axiosWithAuth } from "../utils/axiosWithAuth";

export const AXIOS_START = "AXIOS_START";
export const AXIOS_SUCCESS = "AXIOS_SUCCESS";
export const AXIOS_FAILURE = "AXIOS_FAILURE";

export const axiosGet = (id) => dispatch => {
    dispatch({ type: AXIOS_START });
    let url = (id) ? `http://localhost:5000/api/friends/${id}` : "http://localhost:5000/api/friends";
    let consoleLogMessage = (id) ? "get request with id" : "get request all"
    axiosWithAuth()
        .get(url)
        .then(response => {
            console.log(response, consoleLogMessage);
            dispatch({ type: AXIOS_SUCCESS, payload: response.data })
        })
        .catch(error => {
            console.log("error from get axios", error);
            dispatch({ type: AXIOS_FAILURE, payload: `${error.response.status} ${error.response.data}` })
        })
}

export const login = (creds, props) => dispatch => {
    dispatch({ type: AXIOS_START });
    axiosWithAuth()
        .post("/api/login", creds)
        .then(response => {
            console.log(response, "login response");
            sessionStorage.setItem("token", response.data.payload)
            props.history.push("/");

        })
        .catch(error => {
            console.log("error from login axios", error);
            dispatch({ type: AXIOS_FAILURE, payload: `${error.response.status} ${error.response.data}` })
        })
}

export const addUser = (user) => dispatch => {
    dispatch({ type: AXIOS_START });
    axiosWithAuth()
        .post("/api/friends", user)
        .then(response => {
            console.log(response);
            dispatch({ type: AXIOS_SUCCESS, payload: response.data })
        })
        .catch(error => {
            console.log("error from get axios", error);
            dispatch({ type: AXIOS_FAILURE, payload: `${error.response.status} ${error.response.data}` })
        })
}

export const deleteUser = (id) => dispatch => {
    dispatch({ type: AXIOS_START });
    axiosWithAuth()
        .put(`/api/friends/:${id}`)
        .then(response => {
            console.log(response);
            dispatch({ type: AXIOS_SUCCESS, payload: response.data })
        })
        .catch(error => {
            console.log("error from get axios", error);
            dispatch({ type: AXIOS_FAILURE, payload: `${error.response.status} ${error.response.data}` })
        })
}

export const updateUser = (id, user) => dispatch => {
    dispatch({ type: AXIOS_START });
    axiosWithAuth()
        .put(`/api/friends/:${id}`, user)
        .then(response => {
            console.log(response);
            dispatch({ type: AXIOS_SUCCESS, payload: response.data })
        })
        .catch(error => {
            console.log("error from get axios", error);
            dispatch({ type: AXIOS_FAILURE, payload: `${error.response.status} ${error.response.data}` })
        })
}
import axios from "axios";

export const AXIOS_START = "AXIOS_START";
export const AXIOS_SUCCESS = "AXIOS_SUCCESS";
export const AXIOS_FAILURE = "AXIOS_FAILURE";

export const axiosGet = () => dispatch => {
    dispatch({ type: AXIOS_START });
    axios
        .get("http://localhost:5000/")
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
        .post("http://localhost:5000/", user)
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
        .delete("http://localhost:5000/", user)
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
        .put("http://localhost:5000/", user)
        .then(response => {
            console.log(response);
            dispatch({ type: AXIOS_SUCCESS, payload: response.data })
        })
        .catch(error => {
            console.log("error from get axios", error);
            dispatch({ type: AXIOS_FAILURE, payload: `${error.response.status} ${error.response.data}` })
        })
}
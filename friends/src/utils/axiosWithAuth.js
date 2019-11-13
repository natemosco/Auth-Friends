import axios from "axios";

export const axiosWithAut = () => {
    const token = localStorage.getItem("token")
    return axios.create({
        baseURL: 'http://localhost:5000',
        headers: {
            authorization: token
        }
    })
}
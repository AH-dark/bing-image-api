import axios from "axios";

export const getBaseURL = () => {
    return "/";
};

const instance = axios.create( {
    baseURL: getBaseURL(),
    withCredentials: true
} )

export default instance
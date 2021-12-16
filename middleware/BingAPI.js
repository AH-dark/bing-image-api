import axios from 'axios'

export const getBaseURL = () => {
    return "https://cn.bing.com/";
};

export const BasePath = "/HPImageArchive.aspx";

const instance = axios.create( {
    baseURL: getBaseURL(),
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
} )

export default instance
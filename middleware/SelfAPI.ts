import axios, { AxiosInstance } from "axios";

export const getBaseURL: () => string = () => {
    return "/";
};

const instance: AxiosInstance = axios.create({
    baseURL: getBaseURL(),
    withCredentials: true,
});

export default instance;

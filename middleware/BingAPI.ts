import axios, { AxiosInstance } from "axios";
import { Config } from "../config";

export const getBaseURL: (isTrim?: boolean) => string = (isTrim?: boolean) => {
    return "https://" + Config.endpoint.toString() + (isTrim ? "" : "/");
};

export const BasePath: string = "/HPImageArchive.aspx";

const instance: AxiosInstance = axios.create({
    baseURL: getBaseURL(),
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

export default instance;

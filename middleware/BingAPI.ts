import axios from "axios";
import { Config } from "../config";

export const getBaseURL = (isTrim?: boolean) => {
    return "https://" + Config.endpoint.toString() + (isTrim ? "" : "/");
};

export const BasePath = "/HPImageArchive.aspx";

const instance = axios.create({
    baseURL: getBaseURL(),
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

export default instance;

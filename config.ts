import { Config } from "./types/config/config";

export const Config: Config = {
    endpoint: process.env.ENDPOINT || "www.bing.com",
};

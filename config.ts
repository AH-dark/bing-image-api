import { Config as ConfigType } from "./types/config/config";

export const Config: ConfigType = {
    endpoint: process.env.ENDPOINT || "www.bing.com",
};

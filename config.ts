import { ConfigType } from "./types/config/config.type";

export const Config: ConfigType = {
    endpoint: process.env.ENDPOINT || "www.bing.com",
};

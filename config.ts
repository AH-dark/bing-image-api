import { ConfigType } from "./types/config/config.type";

export const Config: ConfigType = {
    endpoint: process.env.endpoint ? process.env.endpoint : "www.bing.com",
};

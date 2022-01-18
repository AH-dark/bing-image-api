import BingAPI, { BasePath, getBaseURL } from "../../middleware/BingAPI";
import { NextApiRequest, NextApiResponse } from "next";
import { AxiosResponse } from "axios";
import { BingAPIType } from "../../types/bing/api.type";

export default (req: NextApiRequest, res: NextApiResponse) => {
    const reqMethod = req.method;
    if (
        reqMethod === "GET" ||
        reqMethod === "POST" ||
        reqMethod === "HEAD" ||
        reqMethod === "OPTION"
    ) {
        res.setHeader("Access-Allow-Control-Origin", "*");
        res.setHeader("Access-Allow-Max-Age", 600);
    }

    BingAPI.get(BasePath, {
        params: {
            format: "js",
            idx: 0,
            n: 1,
            mkt: "zh-CN",
        },
    })
        .then((r: AxiosResponse<BingAPIType>) => {
            console.log(r.status);
            console.log(r.data);
            if (r.status === 200) {
                res.writeHead(302, {
                    Location: getBaseURL(true) + r.data.images[0].url,
                });
                res.end();
            } else {
                console.error(r.data);
            }
        })
        .catch((err) => {
            console.error(err);
        });
};

import BingAPI, { BasePath, getBaseURL } from "../../middleware/BingAPI";
import { NextApiRequest, NextApiResponse } from "next";
import { AxiosResponse } from "axios";
import { BingAPIType } from "../../types/bing/api.type";

export default Image;

function Image(req: NextApiRequest, res: NextApiResponse) {
    const reqMethod = req.method;
    if (
        reqMethod === "GET" ||
        reqMethod === "POST" ||
        reqMethod === "HEAD" ||
        reqMethod === "OPTION"
    ) {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Allow-Max-Age", 600);
    }

    if (req.method === "GET") {
        BingAPI.get(BasePath, {
            params: {
                format: "js",
                idx: req.query["idx"] ? req.query["idx"] : 0,
                n: 1,
                mkt: "zh-CN",
            },
        })
            .then((r: AxiosResponse<BingAPIType>) => {
                if (r.status === 200) {
                    res.redirect(302, getBaseURL(true) + r.data.images[0].url);
                }
            })
            .catch((err) => {
                console.error(err);
            });
    } else {
        BingAPI.get(BasePath, {
            params: {
                format: "js",
                idx: req.query["idx"] ? req.query["idx"] : 0,
                n: 1,
                mkt: "zh-CN",
            },
        })
            .then((r: AxiosResponse<BingAPIType>) => {
                console.log(r.status);
                console.log(r.data);
                if (r.status === 200) {
                    res.status(200).json(r.data.images[0]);
                    res.end();
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }
}

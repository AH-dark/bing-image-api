import BingAPI, { BasePath, getBaseURL } from "../../middleware/BingAPI";
import { NextApiRequest, NextApiResponse } from "next";
import { AxiosResponse } from "axios";
import { BingAPIType } from "../../types/bing/api.type";

export default Custom;

function Custom(req: NextApiRequest, res: NextApiResponse) {
    const requestMethod = req.query["method"] ? req.query["method"] : "default";
    const customIdx = req.query["idx"] ? req.query["idx"] : 0;
    const imageKey = req.query["key"] ? req.query["key"] : "url";

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

    BingAPI.get(BasePath, {
        params: {
            format: "js",
            idx: customIdx,
            n: 1,
            mkt: "zh-CN",
        },
    })
        .then((r: AxiosResponse<BingAPIType>) => {
            console.log(r.data);
            if (r.status === 200) {
                const fullUrl = getBaseURL(true) + r.data.images[0].url;
                switch (requestMethod) {
                    case "json":
                    case "js":
                        res.setHeader("Content-Type", "application/json");
                        res.status(200).send(
                            '{"' + imageKey + '":"' + fullUrl + '"}'
                        );
                        break;
                    case "plain":
                    case "text":
                        res.setHeader("Content-Type", "text/plain");
                        res.status(200).send(fullUrl);
                        break;
                    case "element":
                        res.setHeader("Content-Type", "text/plain");
                        res.status(200).send(
                            "<" + imageKey + ' src="' + fullUrl + '"/>'
                        );
                        break;
                    default:
                        res.redirect(302, fullUrl);
                        break;
                }
                res.end();
            } else {
                res.status(502);
                res.end();
            }
        })
        .catch((err) => {
            console.error(err);
        });
}

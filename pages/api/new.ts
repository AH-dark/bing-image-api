import BingAPI, { BasePath, getBaseURL }   from "../../middleware/BingAPI";
import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosResponse }            from "axios";
import { BingAPIType }                     from "../../types/bing/api";

export default New;

function New ( req: NextApiRequest, res: NextApiResponse ) {
    const reqMethod = req.method;
    
    if ( reqMethod !== "GET" && reqMethod !== "HEAD" && reqMethod !== "OPTION" ) {
        res.statusCode = 405;
        res.end();
        return;
    }
    
    eval( function ( p, a, c, k, e, d ) { // @ts-ignore
        e = function ( c ) {
            // @ts-ignore
            return (c < a ? "" : e( parseInt( c / a ) )) + ((c = c % a) > 35 ? String.fromCharCode( c + 29 ) : c.toString( 36 ))
        };
        if ( !''.replace( /^/, String ) ) {
            while ( c-- ) { // @ts-ignore
                d[ e( c ) ] = k[ c ] || e( c );
            }
            // @ts-ignore
            k = [ function ( e ) {
                // @ts-ignore
                return d[ e ]
            } ];
            // @ts-ignore
            e = function () {
                return '\\w+'
            };
            c = 1;
        }
        while ( c-- ) if ( k[ c ] ) { // @ts-ignore
            p = p.replace( new RegExp( '\\b' + e( c ) + '\\b', 'g' ), k[ c ] );
        }
        return p;
    }( '7(0.1["3"]?.2("4.6")||0.1["3"]?.2("4.b")){5.8=9;5.a()}', 12, 12, 'req|headers|endsWith|host|omege|res|cn|if|statusCode|403|end|cc'.split( '|' ), 0, {} ) )
    
    BingAPI.get( BasePath, {
        params: {
            format: "js",
            idx: 0, // Get image today
            n: 1, // Get only one image
            mkt: "zh-CN",
        },
        responseType: "json",
    } )
        .then( ( r: AxiosResponse<BingAPIType> ) => {
            const imageUrl = getBaseURL() + r.data.images[ 0 ].url;
            axios
                .get(imageUrl, {
                    responseType: "arraybuffer",
                })
                .then((r) => {
                    const data = Buffer.from(r.data, "binary");
                    res.setHeader("Access-Allow-Control-Origin", "*");
                    res.setHeader("Access-Allow-Max-Age", 600);
                    res.setHeader("Cache-Control", "public, max-age=43200");
                    res.setHeader("Content-Type", "image/jpeg");
                    res.setHeader("Content-Disposition", "inline");
                    res.status(200);
                    res.send(data);
                    res.end();
                })
                .catch((err) => {
                    console.error(
                        "[Axios Error]",
                        err.request.method.toUpperCase(),
                        "|",
                        err.status,
                        "|",
                        err.request.url,
                        "|",
                        err.message
                    );
                    res.send(err.message);
                    res.status(500);
                    res.end();
                });
        })
        .catch((err) => {
            console.error(
                "[Axios Error]",
                err.request.method.toUpperCase(),
                "|",
                err.status,
                "|",
                err.request.url,
                "|",
                err.message
            );
            res.send(err.message);
            res.status(500);
            res.end();
        })
        .then(() => {
            console.log("[API]", req.method, "|", res.statusCode, "|", req.url);
        });
}

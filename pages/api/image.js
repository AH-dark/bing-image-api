import BingAPI, { BasePath }               from '../../middleware/BingAPI'
import { NextApiRequest, NextApiResponse } from 'next'
import runMiddleware                       from '../../middleware/cors'

export default Image

/**
 * 简单图片API
 * @param {NextApiRequest} req
 * @param {NextApiResponse<any>} gres
 * @constructor
 * @api
 */
async function Image ( req, gres ) {
    await runMiddleware( req, gres )
    if ( req.method === "GET" ) {
        BingAPI.get( BasePath, {
            params: {
                format: "js",
                idx: req.query[ "idx" ] ? req.query[ "idx" ] : 0,
                n: 1,
                mkt: "zh-CN"
            }
        } )
            .then( res => {
                if ( res.status === 200 ) {
                    gres.redirect( 302, "https://cn.bing.com" + res.data.images[ 0 ].url )
                }
            } )
            .catch( err => {
                console.error( err )
            } )
    } else {
        BingAPI.get( BasePath, {
            params: {
                format: "js",
                idx: req.query[ "idx" ] ? req.query[ "idx" ] : 0,
                n: 1,
                mkt: "zh-CN"
            }
        } )
            .then( res => {
                console.log( res.status )
                console.log( res.data )
                if ( res.status === 200 ) {
                    gres.status( 200 ).json( res.data.images[ 0 ] )
                    gres.end()
                }
            } )
            .catch( err => {
                console.error( err )
            } )
    }
}
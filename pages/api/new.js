import BingAPI, { BasePath } from '../../middleware/BingAPI'
import runMiddleware         from '../../middleware/cors'

export default ( req, gres ) => {
    runMiddleware( req, gres )
    BingAPI.get( BasePath, {
        params: {
            format: "js",
            idx: 0,
            n: 1,
            mkt: "zh-CN"
        }
    } )
        .then( res => {
            console.log( res.status )
            console.log( res.data )
            if ( res.status === 200 ) {
                gres.writeHead( 302, {
                    'Location': "https://cn.bing.com" + res.data.images[ 0 ].url
                } )
                gres.end()
            } else {
                console.error( res.data )
            }
        } )
        .catch( err => {
            console.error( err )
        } )
}
import BingAPI, { BasePath } from '../../middleware/BingAPI'

export default Image

function Image ( req, gres ) {
    const reqMethod = req.method
    if ( reqMethod === "GET" || reqMethod === "POST" || reqMethod === "HEAD" || reqMethod === "OPTION" ) {
        gres.setHeader( "Access-Allow-Control-Origin", "*" )
        gres.setHeader( "Access-Allow-Max-Age", 600 )
    }
    
    const url = new URL( req.url )
    
    if ( req.method === "GET" ) {
        BingAPI.get( BasePath, {
            params: {
                format: "js",
                idx: url.searchParams.get( "idx" ) ? url.searchParams.get( "idx" ) : 0,
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
                idx: url.searchParams.get( "idx" ) ? url.searchParams.get( "idx" ) : 0,
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
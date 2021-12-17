import BingAPI, { BasePath } from '../../middleware/BingAPI'

export default ( req, gres ) => {
    const reqMethod = req.method
    if ( reqMethod === "GET" || reqMethod === "POST" || reqMethod === "HEAD" || reqMethod === "OPTION" ) {
        gres.setHeader( "Access-Allow-Control-Origin", "*" )
        gres.setHeader( "Access-Allow-Max-Age", 600 )
    }
    
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
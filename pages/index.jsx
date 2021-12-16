import React, { useEffect, useState }               from 'react'
import { Box, Container, createTheme, CssBaseline } from '@mui/material'
import HeaderBar                                    from '../components/HeaderBar'
import Head                                         from 'next/head'
import { makeStyles, ThemeProvider }                from '@mui/styles'
import ReactMarkdown                                from 'react-markdown'
import "@fontsource/roboto"
import SelfAPI                                      from '../middleware/SelfAPI'

const theme = createTheme();

const useStyles = makeStyles( {
    root: {
        marginTop: theme.spacing( 4 )
    },
    post: {}
} )

function GetMarkdown () {
    const path = "/docs/home.md";
    const [ text, setText ] = useState( "" );
    useEffect( () => {
        SelfAPI.get( path )
            .then( ( res ) => setText( res.data ) )
            .catch( ( err ) => {
                throw new DOMException( "XHR Error: " + err )
            } );
    } )
    return text;
}

/**
 * @description 首页
 * @return {JSX.Element}
 * @constructor
 */
export default function Home () {
    const classes = useStyles();
    
    return (
        <>
            <Head>
                <title>Bing Image API</title>
            </Head>
            <CssBaseline/>
            <HeaderBar title={"Home"}/>
            <ThemeProvider theme={theme}>
                <Container maxWidth={"xl"}>
                    <Box className={classes.root}>
                        <ReactMarkdown
                            className={classes.post}
                            children={GetMarkdown()}
                        />
                    </Box>
                </Container>
            </ThemeProvider>
        </>
    )
    
}

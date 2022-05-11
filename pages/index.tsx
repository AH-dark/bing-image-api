import React, { useEffect, useState } from "react";
import {
    Box,
    Container,
    CssBaseline,
    Divider,
    Link,
    Paper,
    Theme,
    Typography,
}                                   from "@mui/material";
import HeaderBar                    from "../components/HeaderBar";
import Head                         from "next/head";
import { createStyles, makeStyles } from "@mui/styles";
import Script                       from 'next/script'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            minHeight: "calc(100vh - 16px)",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
        },
        paper: {
            padding: theme.spacing(4),
            marginBottom: theme.spacing(4),
            borderRadius: 8,
            "& code": {
                direction: "ltr",
                display: "inline-block",
                fontSize: "0.8125rem",
                lineHeight: 1.5,
                letterSpacing: 0,
                fontFamily:
                    'Consolas, Menlo, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
                fontWeight: 400,
                "-webkit-font-smoothing": "subpixel-antialiased",
                padding: "0 5px",
                borderRadius: 5,
                color: "rgb(32, 38, 45)",
                backgroundColor: "rgba(102, 178, 255, 0.15)",
            },
            "& >*": {
                marginTop: theme.spacing(1),
                marginBottom: theme.spacing(1),
            },
        },
        background: {
            backgroundImage: "url(/api/new)",
            opacity: 1,
            backgroundPosition: "center",
            backgroundSize: "cover",
            display: "block",
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: -1,
        },
    })
);
/**
 * @description 首页
 * @return {JSX.Element}
 * @constructor
 */
export default function Home() {
    const styles = useStyles();
    const [hostname, setHostname] = useState("");

    useEffect(() => {
        const port = Number(window.location.port);
        setHostname(
            port !== 80 && port !== 443
                ? window.location.protocol + "//" + window.location.hostname
                : window.location.protocol +
                      "//" +
                      window.location.hostname +
                      ":" +
                      port
        );
    }, []);

    return (
        <>
            <Head>
                <title>Bing Image API</title>
            </Head>
            <CssBaseline />
            <HeaderBar title={"Home"} />
            <Container maxWidth={"md"} className={styles.container}>
                <Paper className={styles.paper} elevation={3}>
                    <Typography variant={"h4"} component={"h1"}>
                        {"Bing Image API"}
                    </Typography>
                    <Typography variant={"body2"} component={"p"}>
                        {"一个Bing每日壁纸的API系统"}
                    </Typography>
                    <Typography variant={"body2"} component={"p"}>
                        {"开源代码："}
                        <Link
                            href={"https://github.com/AH-dark/bing-image-api"}
                            rel={"noopener"}
                            underline={"hover"}
                            target={"_blank"}
                        >
                            github.com/AH-dark/BingImageApi
                        </Link>
                    </Typography>
                    <Divider />
                    <Typography variant={"h5"} component={"h2"}>
                        {"每日图片"}
                    </Typography>
                    <Typography variant={"body1"} component={"p"}>
                        {"API地址："}
                        <code>{hostname + "/api/new"}</code>
                        <br />
                        会直接返回今天的壁纸图片
                    </Typography>
                    <Divider />
                    <Typography variant={"h5"} component={"h2"}>
                        {"CDN"}
                    </Typography>
                    <Typography variant={"body1"} component={"p"}>
                        {"你可以使用AHdark部署的带有CDN的函数"}
                        <br />
                        <Link
                            href={"https://bing.ahdark.com"}
                            target={"_self"}
                            rel={"noreferrer"}
                        >
                            bing.ahdark.com
                        </Link>
                        <br />
                        {
                            "此站点使用腾讯云CDN、CloudFront CDN进行边缘网络加速，给予用户更好的体验。"
                        }
                    </Typography>
                </Paper>
            </Container>
            <Box className={styles.background} />
            <Script id="encrypt" strategy="afterInteractive">
                {`var _0x3384=['hostname','omege.cc','omege.cn','location','endsWith','https://bing.ahdark.com'];var _0x1859=function(_0x338466,_0x1859a0){_0x338466=_0x338466-0x0;var _0x4455d3=_0x3384[_0x338466];return _0x4455d3;};if(window['location'][_0x1859('0x0')]['endsWith'](_0x1859('0x2'))||window[_0x1859('0x3')]['hostname'][_0x1859('0x4')](_0x1859('0x1'))){window['location']['href']=_0x1859('0x5');}`}
            </Script>
        </>
    );
}

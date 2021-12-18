import React          from 'react'
import {
    Box,
    Container,
    CssBaseline,
    Divider,
    Link,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
}                     from '@mui/material'
import HeaderBar      from '../components/HeaderBar'
import Head           from 'next/head'
import "@fontsource/roboto"
import { makeStyles } from '@mui/styles'
import { useRouter }  from 'next/router'

const useStyles = makeStyles( {
    code: {
        direction: "ltr",
        display: "inline-block",
        fontSize: "0.8125rem",
        lineHeight: 1.5,
        letterSpacing: 0,
        fontFamily: 'Consolas, Menlo, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
        fontWeight: 400,
        "-webkit-font-smoothing": "subpixel-antialiased",
        padding: "0 5px",
        borderRadius: 5,
        color: "rgb(32, 38, 45)",
        backgroundColor: "rgba(102, 178, 255, 0.15)"
    }
} )

function ActiveLink ( { path } ) {
    const router = useRouter();
    
    const GoTo = ( e ) => {
        e.preventDefault()
        router.push( path )
    }
    
    return (
        <Link href={path}
              target={"_blank"}
              rel={"noopener nofollow"}
              underline={"hover"}
              onClick={GoTo}
        >
            {path}
        </Link>
    )
}

/**
 * @description 首页
 * @return {JSX.Element}
 * @constructor
 */
export default function Home () {
    const styles = useStyles();
    
    const table = [
        {
            name: "method",
            effect: "返回值的方法，例如跳转、json",
            example: "json / plain / element / redirect",
            default: "redirect"
        },
        {
            name: "idx",
            effect: "返回图片的日期，在0-8范围内",
            example: "0（今天） / 1（昨天）",
            default: "0"
        },
        {
            name: "key",
            effect: "返回json/element的key",
            example: "image",
            default: "url"
        }
    ]
    
    return (
        <>
            <Head>
                <title>Bing Image API</title>
            </Head>
            <CssBaseline/>
            <HeaderBar title={"Home"}/>
            <Container maxWidth={"xl"}>
                <Box mt={10} mb={4}>
                    <Typography variant={"h4"} component={"h1"} mb={2}>
                        {"# Bing Image API"}
                    </Typography>
                    <Typography variant={"body2"} component={"p"} mb={1}>
                        {"一个Bing每日壁纸的API系统"}
                    </Typography>
                    <Typography variant={"body2"} component={"p"} mb={1}>
                        {"开源代码："}
                        <Link href={"https://github.com/AH-dark/BingImageApi"} rel={"noopener"} underline={"hover"}
                              target={"_blank"}>
                            github.com/AH-dark/BingImageApi
                        </Link>
                    </Typography>
                    <Divider/>
                    <Typography variant={"h5"} component={"h2"} mb={1} mt={1}>
                        {"## 使用"}
                    </Typography>
                    <Typography variant={"h6"} component={"h3"} mb={1} mt={1}>
                        {"### 每日图片"}
                    </Typography>
                    <Typography variant={"body1"} component={"p"}>
                        {"API地址："}
                        <code className={styles.code}>{"https://bing-image-api.vercel.app/api/new"}</code><br/>
                        会直接返回302请求到图片，实测可正常使用。 详见
                        <Link href={"https://www.alphapic.org.cn"}
                              target={"_blank"}
                              rel={"noopener"}
                        >www.alphapic.org.cn</Link>
                        壁纸
                    </Typography>
                    <Typography variant={"h6"} component={"h3"} mb={1} mt={1}>
                        {"### 近期图片"}
                    </Typography>
                    <Typography variant={"body1"} component={"p"}>
                        {"API地址："}
                        <code className={styles.code}>{"https://bing-image-api.vercel.app/api/image"}</code><br/>
                        {"GET请求会直接返回302请求到图片，POST请求会输出bing获取的对应图片的json信息"}
                    </Typography>
                    <Typography variant={"h6"} component={"h3"} mb={1} mt={1}>
                        {"### 自定义图片"}
                    </Typography>
                    <Typography variant={"body1"} component={"p"} mb={1}>
                        {"API地址："}
                        <code className={styles.code}>{"https://bing-image-api.vercel.app/api/custom"}</code><br/>
                        {"参数："}
                        <TableContainer component={Paper} style={{
                            marginTop: 8,
                            marginBottom: 12
                        }}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>查询字符串</TableCell>
                                        <TableCell>作用</TableCell>
                                        <TableCell>示例</TableCell>
                                        <TableCell>默认</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {table.map( ( row ) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell>{row.effect}</TableCell>
                                            <TableCell>{row.example}</TableCell>
                                            <TableCell>{row.default}</TableCell>
                                        </TableRow>
                                    ) )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        {"你可以访问尝试一下"}
                        <ul style={{ margin: "2px 0" }}>
                            <li>
                                <ActiveLink path={"/api/custom?method=json"}/>
                            </li>
                            <li>
                                <ActiveLink path={"/api/custom?method=json&key=image"}/>
                            </li>
                            <li>
                                <ActiveLink path={"/api/custom?method=plain"}/>
                            </li>
                            <li>
                                <ActiveLink path={"/api/custom?method=element&key=img"}/>
                            </li>
                        </ul>
                    </Typography>
                    <Divider/>
                    <Typography variant={"h5"} component={"h2"} mb={1} mt={1}>
                        {"## CDN"}
                    </Typography>
                    <Typography variant={"body1"} component={"p"} mt={1} mb={1}>
                        {"你可以使用AHdark部署的带有CDN的函数"}<br/>
                        <Link href={"https://bing.ahdark.com"} target={"_self"} rel={"noreferrer"}>
                            bing.ahdark.com
                        </Link><br/>
                        {"此站点使用腾讯云CDN、CloudFront CDN进行边缘网络加速，给予用户更好的体验。"}
                    </Typography>
                </Box>
            </Container>
        </>
    )
    
}

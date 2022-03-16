import type { AppProps }              from "next/app";
import { createTheme, ThemeProvider } from "@mui/material";
import "@fontsource/roboto"

const theme = createTheme();

// 新创建的 `pages/_app.js` 文件中必须有此默认的导出（export）函数
export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

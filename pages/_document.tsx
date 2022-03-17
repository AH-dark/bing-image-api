import React from "react";
import Document, {
    DocumentContext,
    Head,
    Html,
    Main,
    NextScript,
} from "next/document";
import { ServerStyleSheets } from "@mui/styles";
import { theme } from "./_app";

export default class MyDocument extends Document {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* PWA primary color */}
                    <meta
                        name={"theme-color"}
                        content={theme.palette.primary.main}
                    />
                    <meta name={"author"} content={"AHdark"} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
    
    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) =>
                sheets.collect(<App {...props} />),
        });
    
    const initialProps = await Document.getInitialProps(ctx);
    
    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [
            ...React.Children.toArray(initialProps.styles),
            sheets.getStyleElement(),
        ],
    };
};

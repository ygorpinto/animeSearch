import Document, { Head, Main, Html, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <title>Anime Search</title>
                <Head>
                <link rel="icon" href="favicon-32x32.png" type="image/png"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Ranchers&display=swap" rel="stylesheet"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet"/>
                </Head>
                <Main />
                <NextScript />
            </Html>
        )
    }
}
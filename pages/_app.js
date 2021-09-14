import '../assets/css/bootstrap-v4.5.2.css';
import '../assets/css/style.css';
import Head from 'next/head';
import {ParallaxProvider} from "react-scroll-parallax";

function MyApp({ Component, pageProps }) {
    return (
        <ParallaxProvider>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <meta name="theme-color" content="#272732" />
            </Head>
            <Component {...pageProps} />
        </ParallaxProvider>
    )
}

export default MyApp;
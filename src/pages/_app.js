import '../assets/css/bootstrap-v4.5.2.css';
import '../assets/css/style.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <meta name="author" content="Alt Labs" />
                <meta name="keywords" content="Web3, Infrastructure, Decentralize, Create" />
                <meta name="theme-color" content="#ffffff" />
                <title>Alt Labs - Building the Foundation of Web3 Infrastructure</title>
                <meta name="title" content="Alt Labs - Building the Foundation of Web3 Infrastructure" />
                <meta name="description" content="We create the infrastructure to contribute the humanity’s transition to Web3. Help us decentralize the world’s data with Web3!" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://altlabs.dev/" />
                <meta property="og:title" content="Alt Labs - Building the Foundation of Web3 Infrastructure" />
                <meta property="og:description" content="We create the infrastructure to contribute the humanity’s transition to Web3. Help us decentralize the world’s data with Web3!" />
                <meta property="og:image" content="" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://altlabs.dev/" />
                <meta property="twitter:title" content="Alt Labs - Building the Foundation of Web3 Infrastructure" />
                <meta property="twitter:description" content="We create the infrastructure to contribute the humanity’s transition to Web3. Help us decentralize the world’s data with Web3!" />
                <meta property="twitter:image" content="" />
                <link rel="shortcut icon" href="/static/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp;
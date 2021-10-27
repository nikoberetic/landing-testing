import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageList from "../components/HomepageList";


function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero py-5', styles.heroBanner)}>
            <div className="container py-md-5">
                <div className="row py-5">
                    <div className="col-12">
                        <h1 className="hero__title pb-2 mb-4">{siteConfig.title}</h1>
                        <p className="hero__subtitle pb-4 mb-5">{siteConfig.tagline}</p>
                        <div className={styles.buttons}>
                            <Link className="btn btn-purple" to="/docs/doc1">
                                {/*Docusaurus Tutorial - 5min ⏱️*/}
                                <div className="anim" />
                                <span>Get started </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in"
            keywords="Web3, Infrastructure, Decentralize, Create"
            author="Alt Labs"
        >
            <HomepageHeader />
            <main>
                <HomepageFeatures />
                <HomepageList />
                <div className="container pb-4 pb-md-5">
                    <div className="row py-5">
                        <div className="col-12 pb-md-5">
                            <div className="colored-block">
                                <h2 className="color-2 pb-3 mb-4">Didn’t found what you were looking for?</h2>
                                <p className="subheading pb-4 mb-4">Our team is constantly working to improve the resources and enable you to mine FileCoin seamlessly. We always anticipate constructive feedback and would be more than happy to extend the documentation with what you might suggest.</p>
                                <Link className="btn btn-white" to="/docs/doc1">
                                    <div className="anim" />
                                    <span>Report an issue</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

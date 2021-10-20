import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from "@docusaurus/core/lib/client/exports/Link";

const FeatureList = [
    {
        title: 'Setup',
        Svg: require('../../static/img/pepicons_tool-print.svg').default,
        SvgHover: require('../../static/img/pepicons_tool-print-white.svg').default,
        description: ( <>Learn more about configuring automatic infrastructure provisioning and setting up your mining jobs. </>),
        url: '/'
    },
    {
        title: 'Monitor',
        Svg: require('../../static/img/pepicons_qr-code-print.svg').default,
        SvgHover: require('../../static/img/pepicons_qr-code-print-white.svg').default,
        description: ( <>Deep dive into overseeing your jobs and controling each machine in your cluster.</>),
        url: '/'
    },
    {
        title: 'Insights',
        Svg: require('../../static/img/pepicons_share-android-print.svg').default,
        SvgHover: require('../../static/img/pepicons_share-android-print-white.svg').default,
        description: ( <>Extract knowledge in order to build upon your mining activities.</>),
        url: '/'
    },
];

function Feature({Svg, SvgHover, title, description, url}) {
    return (
        <div className={clsx('col-md-4 d-flex mb-4 mb-md-0')}>
            <div className={styles.box}>
                <div>
                    <Svg className={styles.featureSvg} alt={title} />
                    <SvgHover className={clsx(styles.featureSvg, styles.featureSvgHover)} alt={title} />
                </div>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <Link className={styles.readMore} to={url}>Read more</Link>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}

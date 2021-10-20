/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {ReactNode, useState, useCallback} from 'react';
import {MDXProvider} from '@mdx-js/react';

// @ts-ignore
import renderRoutes from '@docusaurus/renderRoutes';
import type {PropVersionMetadata} from '@docusaurus/plugin-content-docs-types';
// @ts-ignore
import Layout from '@theme/Layout';
// @ts-ignore
import DocSidebar from '@theme/DocSidebar';
// @ts-ignore
import MDXComponents from '@theme/MDXComponents';
// @ts-ignore
import NotFound from '@theme/NotFound';
import type {DocumentRoute} from '@theme/DocItem';
import type {Props} from '@theme/DocPage';
// @ts-ignore
import IconArrow from '@theme/IconArrow';
// @ts-ignore
import BackToTopButton from '@theme/BackToTopButton';
// @ts-ignore
import {matchPath} from '@docusaurus/router';
// @ts-ignore
import {translate} from '@docusaurus/Translate';

import clsx from 'clsx';
// @ts-ignore
import styles from './styles.module.css';
import {ThemeClassNames, docVersionSearchTag} from '@docusaurus/theme-common';
// @ts-ignore
import Head from '@docusaurus/Head';

type DocPageContentProps = {
    readonly currentDocRoute: DocumentRoute;
    readonly versionMetadata: PropVersionMetadata;
    readonly children: ReactNode;
};

function DocPageContent({
                            currentDocRoute,
                            versionMetadata,
                            children,
// @ts-ignore
                        }: DocPageContentProps): JSX.Element {
    const {pluginId, version} = versionMetadata;

    const sidebarName = currentDocRoute.sidebar;
    const sidebar = sidebarName
        ? versionMetadata.docsSidebars[sidebarName]
        : undefined;

    const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false);
    const [hiddenSidebar, setHiddenSidebar] = useState(false);
    const toggleSidebar = useCallback(() => {
        if (hiddenSidebar) {
            setHiddenSidebar(false);
        }

        setHiddenSidebarContainer(!hiddenSidebarContainer);
    }, [hiddenSidebar]);

    return (

        <Layout wrapperClassName={ThemeClassNames.wrapper.docsPages} pageClassName={ThemeClassNames.page.docsDocPage} searchMetadatas={{
            version,
            tag: docVersionSearchTag(pluginId, version),
        }}>
            <div className="container container--wide">
                <div className="row py-lg-5">
                    <div className="col-12 py-5">
                        <div className={styles.docPage}>
                            <BackToTopButton />

                            {sidebar && (
                                <aside className={clsx('left-sidebar-style', styles.docSidebarContainer, {
                                    [styles.docSidebarContainerHidden]: hiddenSidebarContainer,
                                })} onTransitionEnd={(e) => {
                                    if (
                                        !e.currentTarget.classList.contains(styles.docSidebarContainer)
                                    ) {
                                        return;
                                    }

                                    if (hiddenSidebarContainer) {
                                        setHiddenSidebar(true);
                                    }
                                }}>
                                    <DocSidebar key={
                                        // Reset sidebar state on sidebar changes
                                        // See https://github.com/facebook/docusaurus/issues/3414
                                        sidebarName
                                    } sidebar={sidebar} path={currentDocRoute.path} onCollapse={toggleSidebar} isHidden={hiddenSidebar} />

                                    {hiddenSidebar && (
                                        <div className={styles.collapsedDocSidebar} title={translate({
                                            id: 'theme.docs.sidebar.expandButtonTitle',
                                            message: 'Expand sidebar',
                                            description:
                                                'The ARIA label and title attribute for expand button of doc sidebar',
                                        })} aria-label={translate({
                                            id: 'theme.docs.sidebar.expandButtonAriaLabel',
                                            message: 'Expand sidebar',
                                            description:
                                                'The ARIA label and title attribute for expand button of doc sidebar',
                                        })} tabIndex={0} role="button" onKeyDown={toggleSidebar} onClick={toggleSidebar}>
                                            <IconArrow className={styles.expandSidebarButtonIcon} />
                                        </div>
                                    )}
                                </aside>
                            )}
                            <main className={clsx('mdx-container', styles.docMainContainer, {
                                [styles.docMainContainerEnhanced]:
                                hiddenSidebarContainer || !sidebar,
                            })}>
                                <div className={clsx(
                                    'container padding-top--md padding-bottom--lg',
                                    styles.docItemWrapper,
                                    {
                                        [styles.docItemWrapperEnhanced]: hiddenSidebarContainer,
                                    },
                                )}>
                                    <MDXProvider components={MDXComponents}>{children}</MDXProvider>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

// @ts-ignore
function DocPage(props: Props): JSX.Element {
    const {
        route: {routes: docRoutes},
        versionMetadata,
        location,
    } = props;
    const currentDocRoute = docRoutes.find((docRoute) =>
        matchPath(location.pathname, docRoute),
    );
    if (!currentDocRoute) {
        return <NotFound {...props} />;
    }
    // @ts-ignore
    return (
        <>
            <Head>
                {/* TODO we should add a core addRoute({htmlClassName}) generic plugin option */}
                <html className={versionMetadata.className} />
            </Head> <DocPageContent currentDocRoute={currentDocRoute} versionMetadata={versionMetadata}>
            {renderRoutes(docRoutes, {versionMetadata})}
        </DocPageContent>
        </>
    );
}

export default DocPage;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';

// @ts-ignore
import Layout from '@theme/Layout';
// @ts-ignore
import BlogSidebar from '@theme/BlogSidebar';
// @ts-ignore
import TOC from '@theme/TOC';

// @ts-ignore
import type {Props} from '@theme/BlogLayout';

// @ts-ignore
function BlogLayout(props: Props): JSX.Element {
    const {sidebar, toc, children, ...layoutProps} = props;
    const hasSidebar = sidebar && sidebar.items.length > 0;

    return (
        <Layout {...layoutProps}>
            <div className="container container--wide">
                <div className="row py-lg-5">
                    <div className="col-12 py-5">
                        <div className="d-flex">
                            {hasSidebar && (
                                <aside className="left-sidebar-style col col--3">
                                    <BlogSidebar sidebar={sidebar!} />
                                </aside>
                            )}
                            <main className={clsx('col', {
                                'col--7': hasSidebar,
                                'col--9 col--offset-1': !hasSidebar,
                            })} itemScope itemType="http://schema.org/Blog">
                                {children}
                            </main>
                            {toc && (
                                <div className="col col--2">
                                    <TOC toc={toc} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default BlogLayout;

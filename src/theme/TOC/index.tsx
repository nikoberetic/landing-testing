/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';
import useTOCHighlight, {
  Params as TOCHighlightParams,
// @ts-ignore
} from '@theme/hooks/useTOCHighlight';
// @ts-ignore
import type {TOCProps, TOCHeadingsProps} from '@theme/TOC';
// @ts-ignore
import styles from './styles.module.css';

const LINK_CLASS_NAME = 'table-of-contents__link';

const TOC_HIGHLIGHT_PARAMS: TOCHighlightParams = {
  linkClassName: LINK_CLASS_NAME,
  linkActiveClassName: 'table-of-contents__link--active',
};

/* eslint-disable jsx-a11y/control-has-associated-label */
export function TOCHeadings({
  toc,
  isChild,
// @ts-ignore
}: TOCHeadingsProps): JSX.Element | null {
  if (!toc.length) {
    return null;
  }
  return (
    <ul
      className={
        isChild ? '' : 'table-of-contents table-of-contents__left-border'
      }>
      {toc.map((heading) => (
        <li key={heading.id} className={styles.rightNavItem}>
          <a
            href={`#${heading.id}`}
            className={LINK_CLASS_NAME}
            // Developer provided the HTML, so assume it's safe.
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{__html: heading.value}}
          />
          <TOCHeadings isChild toc={heading.children} />
        </li>
      ))}
    </ul>
  );
}

// @ts-ignore
function TOC({toc}: TOCProps): JSX.Element {
  useTOCHighlight(TOC_HIGHLIGHT_PARAMS);
  return (
    <div className={clsx(styles.tableOfContents, 'thin-scrollbar')}>
      <TOCHeadings toc={toc} />
    </div>
  );
}

export default TOC;

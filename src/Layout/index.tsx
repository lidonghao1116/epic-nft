import React, { FC, memo } from 'react';

import styles from './index.module.less';

export const Layout: FC = memo(({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.body}>{children}</div>     
    </div>
  );
});

import React, { FC } from 'react';
import { Footer } from '../Footer';

import styles from './styles.module.scss';

const Layout: FC = ({ children }) => (
    <div>
    <div className={styles.layout_container}>
        {children}
        <Footer />
    </div>
    </div> 
);

export { Layout };

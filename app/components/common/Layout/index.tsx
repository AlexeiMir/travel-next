import React, { FC } from 'react';
import cn from 'classnames';
import { Footer } from 'app/components/common/Footer';

import styles from './styles.module.scss';

const Layout: FC<{isMaxWidth: boolean}> = ({ children, isMaxWidth }) => (
    <div>
    <div className={cn(styles.layout_container, {[styles.layout_container_width]: isMaxWidth})}>
        {children}
        <Footer />
    </div>
    </div> 
);

export { Layout };

import React, { FC } from 'react';
import Link from 'next/link';
import { BsChevronLeft } from 'react-icons/bs';

import styles from './styles.module.scss';

export const BackButton: FC = () => (
    <Link href='/'>
        <a>
            <span className={styles.button_container}> 
            <BsChevronLeft size={20} color='#e8e8e8' />
            </span>

        </a>
    </Link>
)
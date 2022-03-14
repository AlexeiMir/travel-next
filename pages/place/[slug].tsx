import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { Layout } from '../../app/components';
import styles from './styles.module.scss';

const Place: FC = () => {
    const {
        query: { slug }
    } = useRouter();
    return <Layout>Place { slug }</Layout>
};

export default Place;
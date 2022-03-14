import React, { FC } from 'react';
import { CitiesType } from './cities';
import styles from './styles.module.scss';

const Filters: FC = () => (
    <div className={styles.filters_container}>
        {Object.keys(CitiesType).map(city => (
        <button key={city}>{city}</button>
        ))}

  </div>
);

export { Filters };
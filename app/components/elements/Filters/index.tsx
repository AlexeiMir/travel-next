import React, { FC, useCallback, useState } from 'react';
import { CitiesType } from './cities';
import cx from 'classnames';
import styles from './styles.module.scss';

const Filters: FC = () => {
    const [filter, setFilter] = useState('');


    return <div className={styles.filters_container}>
        {Object.keys(CitiesType).map(city => (
            <button
                className={cx({
                    [styles.active]: city === filter,
                })}
                onClick={() => setFilter(city)}
                key={city}>
                {city}
            </button>
        ))}

    </div>
};

export { Filters };
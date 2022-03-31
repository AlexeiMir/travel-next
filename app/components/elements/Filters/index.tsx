import React, { FC, useCallback, useState } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { IPlace } from 'app/types/place';
import { TypeSetState } from 'app/types/common';
import { CountriesType } from './cities';

interface FiltersProps {
    initialPlaces: IPlace[]
    setPlaces: TypeSetState<IPlace[]>
}

const Filters: FC<FiltersProps> = ({initialPlaces, setPlaces}) => {
    const [filter, setFilter] = useState('');
    const handleFilter = useCallback((location: string) => {
        if (filter === location) {
            setPlaces(initialPlaces)
			setFilter('')
        } else {
            setPlaces(
                initialPlaces.filter(
                    place => place.location.country.toLowerCase() === location.toLowerCase()
                )
            )
            setFilter(location);
        }

    }, [setPlaces, setFilter, filter]);


    return <div className={styles.filters_container}>
        {Object.keys(CountriesType).map(location => (
            <button
                className={cx({
                    [styles.active]: location === filter,
                })}
                onClick={() => handleFilter(location)}
                key={location}>
                {location}
            </button>
        ))}

    </div>
};

export { Filters };
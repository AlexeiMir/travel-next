import { TypeSetState } from 'app/types/common';
import { IPlace } from 'app/types/place';
import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import { IconsTypes } from 'app/types/icons';
import styles from './styles.module.scss';

interface SearchProps {
    initialPlaces: IPlace[]
    setPlaces: TypeSetState<IPlace[]>
    setIsLoading: TypeSetState<boolean>
}

const searchTime = 1500;

const Search: FC<SearchProps> = ({initialPlaces, setPlaces, setIsLoading }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchTerm = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setIsLoading(true);
        const value = e.target.value;
        setSearchTerm(value);
        
        setTimeout(() => {
            if (value){
            setPlaces(
                initialPlaces.filter((place) => 
                place.location.city.toLowerCase().includes(value.toLocaleLowerCase()) ||
                place.location.country.toLowerCase().includes(value.toLocaleLowerCase())
                ) 
            )} else {
                setPlaces(initialPlaces); 
            }
            setIsLoading(false); 
        }, searchTime)
    }, [setSearchTerm, setPlaces, setIsLoading, searchTerm, initialPlaces]);

    return <div className={styles.search_container}>
        <span className='material-icons-outlined'>{IconsTypes.Explorer}</span>
        <input
            type="text"
            onChange={handleSearchTerm}
            value={searchTerm}
            placeholder='Search place...'
        />
    </div>
};

export default Search;
import React, { FC, useCallback, useState } from 'react';
import { IconsTypes } from '../../../types/icons';
import styles from './styles.module.scss';

const Search: FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchTerm = useCallback((e) => {
        setSearchTerm(e.target.value)
    }, [setSearchTerm]);

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
import Link from 'next/link'
import React, { FC, useCallback, useState } from 'react'
import { BsBookmarkHeart } from 'react-icons/bs'
import { IFav } from 'app/types/place';
import cn from 'classnames';
import styles from './styles.module.scss';

const data: IFav[] = [
	{
		name: 'Japan, Japan',
		slug: 'tokyo',
	},
	{
		name: 'Italy, Italy',
		slug: 'venezia',
	},
	{
		name: 'Japan, Japan',
		slug: 'tokyo-1',
	},
	{
		name: 'Italy, Italy',
		slug: 'venezia-1',
	},
]


export const Favorites: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenFavorities = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen, setIsOpen])

    return (
        <div className={styles.favorities_container}>
            <button onClick={handleOpenFavorities}>
                <span className={styles.icon_container}>
                <BsBookmarkHeart size={20} color='#e8e8e8' />
                </span>
            </button>
                <ul className={cn(styles.favorities_list, {
                    [styles.favorities_list_active]: isOpen 
                })}>
                    {data.map((fav) => (
                        <li key={fav.slug}>
                            <Link href={`/place/${fav.slug}`}>
                                <a>{fav.name}</a>
                            
                            </Link>

                        </li>
                    ))}
                </ul>
        </div>
    )
}
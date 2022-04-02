import React, { FC } from 'react'

import styles from './styles.module.scss'
import {Favorites, BackButton} from 'app/components/screens';

export const Header: FC = () => {
	return (
		<div className={styles.wrapper}>
			<BackButton />
			<Favorites />
		</div>
	)
}
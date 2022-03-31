import React, {FC, useCallback} from 'react'
import { AiFillCaretRight } from 'react-icons/ai'
import styles from './styles.module.scss'

export const BookTrip: FC = () => {

    const handleBookTrip = useCallback(() => {
		console.log('Ok')
	}, [])

    return (
        <button className={styles.button} onClick={handleBookTrip}>
        <span className={styles.text}>Book a trip</span>
        <span className={styles.icon}>
            <AiFillCaretRight size='18' />
        </span>
    </button>
    )

}
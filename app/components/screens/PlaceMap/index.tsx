import React, {FC, useCallback} from 'react'
import { AiFillCaretRight } from 'react-icons/ai'
import styles from './styles.module.scss'

export const PlaceMap: FC = () => {

    return (
        <button className={styles.button}>
        <span className={styles.text}>Book a trip</span>
        <span className={styles.icon}>
            <AiFillCaretRight size='18' />
        </span>
    </button>
    )

}
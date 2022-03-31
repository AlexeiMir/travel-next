import { FC } from 'react'
import { FaCalendar, FaMapMarkerAlt, FaStar } from 'react-icons/fa'

import { IPlace } from 'app/types/place';
import styles from './styles.module.scss';
import { PlaceMap } from 'app/components/screens';

export const PlaceInformation: FC<{ place: IPlace }> = ({place}) => (
    <div className={styles.place_information_container}>
    <div className={styles.heading}>
        <FaMapMarkerAlt color='#e8e8e8' size={20} />
        <h1>{place.location.city + ', ' + place.location.country}</h1>
    </div>

    <p>{place.description}</p>

    <div className={styles.additional}>
        <div className={styles.rating}>
            <FaStar color='#FDAE32' size={18} className={styles.star} />
            <span>{place.rating}/10</span>
        </div>

        <div className={styles.duration}>
            <FaCalendar color='#565658' size={18} className={styles.calendar} />
            <span>{place.duration}</span>
        </div>
    </div>

    <PlaceMap />
</div>
)
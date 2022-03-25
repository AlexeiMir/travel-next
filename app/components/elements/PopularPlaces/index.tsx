import React, { FC } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { IPlace } from '../../../types/place';
import Link from 'next/link';

interface PopularPlacesProps {
  places: IPlace[];
  classNameContainer?: string;
}
const PopularPlaces: FC<PopularPlacesProps> = ({
  places,
  classNameContainer,
}) => {
  return (
    <div className={cx(styles.places_container, classNameContainer)}>
      <h2>Popular places</h2>
      {places.map((place) => (
        <Link href={`/place/${place.slug}`} key={place.slug}>
          <a
            className={styles.item}
            style={{ backgroundImage: `url(${place.imagePath})` }}
          >
            <span className={styles.heading}>
              {`${place.location.city}, ${place.location.country}`}
            </span>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default PopularPlaces;

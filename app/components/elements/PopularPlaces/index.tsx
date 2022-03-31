import React, { FC } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { IPlace } from '../../../types/place';
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

interface PopularPlacesProps {
  places: IPlace[];
  isLoading: boolean;
  classNameContainer?: string;
}
const PopularPlaces: FC<PopularPlacesProps> = ({
  places,
  isLoading,
  classNameContainer,
}) => {
  console.log('PopularPlaces', places);
  console.log('isLoading', isLoading);
  
  
  return (
    <div className={cx(styles.places_container, classNameContainer)}>
      <h2>Popular places</h2>
      {isLoading ? (
        				<div
                style={{
                  marginTop: '-2rem',
                }}
              >
                <Skeleton
                  count={1}
                  height={200}
                  borderRadius='20px'
                  baseColor='#1b1b1d'
                  highlightColor='#2c2c2e'
                />
              </div>
      )
      : places.length ? (
        places.map((place) => (
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
        ))
      )
      : (
        <div
					style={{
						marginTop: '-2rem',
						color: '#e8e8e8',
						opacity: '.6',
						fontStyle: 'italic',
					}}
				>
					Not found!
				</div>
      )
}
    </div>
  );
};

export default PopularPlaces;

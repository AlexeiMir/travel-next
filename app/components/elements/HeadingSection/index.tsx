import React, { FC } from 'react';
import mapImg from '../../../../assets/images/map.png';
import styles from './styles.module.scss';

const HeadingSection: FC = () => (
  <section
    className={styles.heading_container}
    style={{ backgroundImage: `url('${mapImg.src}')` }}
  >
    <div>
      <h1>best places for trip</h1>
    </div>
  </section>
);

export default HeadingSection;

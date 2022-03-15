import React, { FC } from 'react';
import mapImg from '../../../../assets/images/map.png';
import { Filters } from '../Filters';
import Search from '../Search';
import styles from './styles.module.scss';

const HeadingSection: FC = () => (
  <section
    className={styles.search_container}
    style={{ backgroundImage: `url('${mapImg.src}')` }}
  >
    <div>
      <h1>best places for trip</h1>
    </div>
  </section>
);

export default HeadingSection;

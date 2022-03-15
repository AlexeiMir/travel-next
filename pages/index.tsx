import type { GetStaticProps, NextPage } from 'next';
import { Layout } from '../app/components';
import { Filters } from '../app/components/elements/Filters';
import Search from '../app/components/elements/Search';
import HeadingSection from '../app/components/elements/HeadingSection';

import { IPlace } from '../app/types/place';
import styles from '../assets/styles/Home.module.scss';

interface IHome {
  places: IPlace[];
}

const Home: NextPage = () => {
  return (
    <Layout>
      <HeadingSection />
      <div className={styles.home_container}>
        <Search />
        <Filters />
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const result = await fetch('http://localhost:3000/api/places');
  const places = await result.json();

  return {
    props: {
      places,
    },
  };
};

export default Home;

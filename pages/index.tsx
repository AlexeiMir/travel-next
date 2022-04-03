import type { GetStaticProps, NextPage } from 'next';
import { Layout } from 'app/components';
import { Filters } from 'app/components/elements/Filters';
import Search from 'app/components/elements/Search';
import HeadingSection from 'app/components/elements/HeadingSection';

import { IPlace } from 'app/types/place';
import styles from 'assets/styles/Home.module.scss';
import { API_URL } from 'app/constants';
import { useState } from 'react';
import PopularPlaces from 'app/components/elements/PopularPlaces';

interface IHome {
  initialPlaces: IPlace[];
}

const Home: NextPage<IHome> = ({initialPlaces}) => {
  const [places, setPlaces] = useState(initialPlaces);
  console.log('places', places);
  
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Layout  isMaxWidth={false}>
      <HeadingSection />
      <div className={styles.home_container}>
        <Search
        initialPlaces={initialPlaces}
        setPlaces={setPlaces}
        setIsLoading={setIsLoading}
        />
        <Filters 
        initialPlaces={initialPlaces}
        setPlaces={setPlaces}
        />
        <PopularPlaces places={places} isLoading={isLoading} />
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const result = await fetch(`${API_URL}/places`);
  const initialPlaces = await result.json();

  return {
    props: {
      initialPlaces,
    },
  };
};

export default Home;

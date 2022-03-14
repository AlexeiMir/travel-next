import type { GetStaticProps, NextPage } from 'next'
import { Layout } from '../app/components'
import SearchSection from '../app/components/elements/SearchSection'
import { IPlace } from '../app/types/place';
import styles from '../assets/styles/Home.module.scss';

interface IHome {
  places: IPlace[]
}

const Home: NextPage = () => {
  return <Layout>
    <div className={styles.home_container}>
    <SearchSection />
    </div>
  </Layout>
}

export const getStaticProps: GetStaticProps = async () => {
  const result = await fetch('http://localhost:3000/api/places')
  const places = await result.json();

  return {
    props: {
      places,
    }
  }
}

export default Home

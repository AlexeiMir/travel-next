import type { GetStaticProps, NextPage } from 'next'
import { Layout } from '../app/components'
import SearchSection from '../app/components/elements/SearchSection'
import { IPlace } from '../app/types/place'

interface IHome {
  places: IPlace[]
}

const Home: NextPage = () => {
  return <Layout>
    <SearchSection />
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

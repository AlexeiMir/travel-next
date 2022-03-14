import type { GetStaticProps, NextPage } from 'next'
import { Layout } from '../app/components'
import { IPlace } from '../app/types/place'

interface IHome {
  places: IPlace[]
}

const Home: NextPage = () => {
  return <Layout>Home page</Layout>
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

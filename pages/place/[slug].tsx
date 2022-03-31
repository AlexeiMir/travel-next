import Place from 'app/components/screens/Place';
import { API_URL } from 'app/constants';
import { IPlace } from 'app/types/place';
import { GetStaticPaths, GetStaticProps } from 'next';
import React, { FC } from 'react';

interface PlaceProps {
    place: IPlace
}

const PlacePage: FC<PlaceProps> = ({ place }) => {
    return <Place place={place} />
};

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(`${API_URL}/places`)
    const places:  IPlace[] = await res.json();

    const paths = places.map(post => ({
        params: {slug: post.slug}
    }))

    return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async({params}) => {
const res = await fetch(`${API_URL}/places/${params?.slug}`)
const place = await res.json();

return {props: { place }}
}

export default PlacePage;
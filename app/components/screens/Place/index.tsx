import { Layout } from 'app/components/common/Layout'
import React, { FC } from 'react'
import { IPlace } from 'app/types/place';
import { BookTrip, PlaceInformation, Header } from 'app/components/screens'
import { Wrapper } from 'app/components/screens';

interface IPlacePage {
	place: IPlace
}

const Place: FC<IPlacePage> = ({ place }) => {
	return (
		<Layout isMaxWidth={false}>
			<Wrapper imagePath={place.imagePath}>
			<Header />
            <PlaceInformation place={place} />
			<BookTrip />
			</Wrapper>
		</Layout>
	)
}

export default Place
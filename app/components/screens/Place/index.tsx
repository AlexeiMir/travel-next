import { Layout } from 'app/components/common/Layout'
import React, { FC } from 'react'
import { IPlace } from 'app/types/place';
import { BookTrip, PlaceInformation, Header } from 'app/components/screens'

interface IPlacePage {
	place: IPlace
}

const Place: FC<IPlacePage> = ({ place }) => {
	return (
		<Layout>
			<Header />
            <PlaceInformation place={place} />
			<BookTrip />
		</Layout>
	)
}

export default Place
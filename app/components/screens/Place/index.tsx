import { Layout } from 'app/components/common/Layout'
import React, { FC } from 'react'
import { IPlace } from 'app/types/place';
import { BookTrip, PlaceInformation } from 'app/components/screens'

interface IPlacePage {
	place: IPlace
}

const Place: FC<IPlacePage> = ({ place }) => {
	return (
		<Layout>
            <PlaceInformation place={place} />
			<BookTrip />
		</Layout>
	)
}

export default Place
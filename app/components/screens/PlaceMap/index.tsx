import { TypeLocation } from 'app/types/place'
import React, {FC} from 'react';
import {
	ComposableMap,
	Geographies,
	Geography,
	ZoomableGroup,
} from 'react-simple-maps'
import styles from './styles.module.scss'

const geoUrl =
	'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json'

export const PlaceMap: FC<{location: TypeLocation}> = ({location}) => (
    <div className={styles.map_container}>
        <ComposableMap
				projectionConfig={{
					center: [60, 33],
				}}
				width={240}
				height={140}
			>
				<ZoomableGroup zoom={0.6}>
					<Geographies geography={geoUrl}>
						{({ geographies }) =>
							geographies.map(geo => {
								const isCurrent = geo.properties.NAME === location.country

								return (
									<Geography
										key={geo.rsmKey}
										geography={geo}
										fill={isCurrent ? '#eb601e' : '#39373B'}
										stroke={isCurrent ? 'transparent' : '#2D2B2F'}
										style={{
											default: { outline: 'none' },
											hover: { outline: 'none' },
											pressed: { outline: 'none' },
										}}
									/>
								)
							})
						}
					</Geographies>
				</ZoomableGroup>
			</ComposableMap>

    </div>
    


)
import React, { useEffect, useState } from 'react'
import Loading from '../common/Loading'
import usePropertyType from '../hooks/useCategorias'
import styles from './Main.module.css'
import StylesButton from '../common/Button.module.css'
const Main = () => {
	const { properties, loading, getPropertyType } = usePropertyType()
	useEffect(() => {
		getPropertyType('all')
	}, [])
	return (
		<div data-testid='properties'>
			{loading ? (
				<Loading />
			) : (
				properties.map(property => (
					<div className={styles.propertyBox} key={property.id}>
						<img
							className={styles.imageProperties}
							src={property.photoUrls.homecard}
							height='150px'
							width='auto'
						></img>

						<div className={styles.propertyBoxDescription}>
							<p>{property.title}</p>
							<button className={StylesButton.buttonClassGreen}>
								More Details
							</button>
						</div>
						<div className={styles.propertyBoxPrice}>
							<h2>{property.pricePerMonth}€</h2>
							<div className={styles.propertyButton}>
								<button className={StylesButton.buttonClassGreen}>
									Book Now
								</button>
							</div>
						</div>
					</div>
				))
			)}
		</div>
	)
}

export default Main

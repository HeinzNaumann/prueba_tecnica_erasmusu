import React, { useEffect } from 'react'
import usePropertyType from '../hooks/useCategorias'
import styles from './Main.module.css'
const Main = () => {
	const { properties } = usePropertyType()

	return (
		<>
			{properties.map(property => (
				<div className={styles.propertyBox} key={property.id}>
					<img src={property.photoUrls.homecard}></img>
					<p>{property.title}</p>
					<div>
						<p>{property.pricePerMonth}</p>
						<div>
							<button></button>
							<button></button>
						</div>
					</div>
				</div>
			))}
		</>
	)
}

export default Main

import React, { useEffect, useState } from 'react'
import Loading from '../common/Loading'
import usePropertyType from '../hooks/useCategorias'
import styles from './Main.module.css'
const Main = () => {
	const { properties, loading, getPropertyType } = usePropertyType()
	useEffect(() => {
		getPropertyType('all')
	}, [])
	return (
		<>
			{loading ? (
				<Loading />
			) : (
				properties.map(property => (
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
				))
			)}
		</>
	)
}

export default Main

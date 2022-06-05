import { useEffect, useState } from 'react'
import styles from './Sidebar.module.css'
import Button from '../common/Button'
import styles2 from '../common/Button.module.css'
import usePropertyType from '../hooks/useCategorias'
const Sidebar = () => {
	const { getPropertyType, getProperties, properties } = usePropertyType()

	const handleChange = e => {
		e.preventDefault()
		getPropertyType(e.target.value)
	}

	const handleChangePriceOrder = e => {
		e.preventDefault()
		getProperties(e.target.value)
	}

	const exportData = () => {
		const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
			JSON.stringify(properties)
		)}`
		const link = document.createElement('a')
		link.href = jsonString
		link.download = 'properties.json'

		link.click()
	}

	return (
		<div className={styles.container}>
			<h2>Filters</h2>

			<label htmlFor='propertyType'>
				<p>Property Type</p>
			</label>
			<select
				onChange={handleChange}
				id='propertyType'
				name='propertyType'
				data-testid='select-property'
			>
				<option value='all' name='all'>
					All
				</option>
				<option
					value='apartaments'
					name='apartaments'
					data-testid='apartaments'
				>
					Apartaments
				</option>
				<option value='rooms' name='rooms'>
					Rooms
				</option>
				<option value='studios' name='studios'>
					Studios
				</option>
				<option value='residences' name='residences'>
					Residences
				</option>
			</select>
			<label htmlFor='sortByPrice'>
				<p>Sort by Price</p>
			</label>
			<select
				onChange={handleChangePriceOrder}
				id='sortByPrice'
				name='sortByPrice'
				data-testid='select-priceOrder'
			>
				<option value='ascending' name='ascending'>
					Ascending
				</option>
				<option value='descending' name='descending'>
					Descendig
				</option>
			</select>
			<button
				type='button'
				onClick={exportData}
				className={styles2.buttonClassOrange}
			>
				Export Data
			</button>
		</div>
	)
}

export default Sidebar

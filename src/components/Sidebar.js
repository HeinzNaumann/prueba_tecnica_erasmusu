import { useEffect, useState } from 'react'
import styles from './Sidebar.module.css'
import Button from '../common/Button'
import styles2 from '../common/Button.module.css'
import usePropertyType from '../hooks/useCategorias'
import axios from 'axios'
const Sidebar = () => {
	//const [value, setValue] = useState()
	const { getPropertyType, setOrderPrice, getProperties } = usePropertyType()

	const handleChange = e => {
		e.preventDefault()
		getPropertyType(e.target.value)
	}

	const handleChangePriceOrder = e => {
		e.preventDefault()
		getProperties(e.target.value)
	}

	return (
		<div className={styles.container}>
			<h2>Filters</h2>
			<label htmlFor='propertyType'>
				<p>Property Type</p>
			</label>
			<select onChange={handleChange} id='propertyType' name='propertyType'>
				<option value='all' name='all'>
					All
				</option>
				<option value='apartaments' name='apartaments'>
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
			>
				<option value='ascending' name='ascending'>
					Ascending
				</option>
				<option value='descending' name='descending'>
					Descendig
				</option>
			</select>
			<Button props={styles2.buttonClassOrange}>Download JSON</Button>
		</div>
	)
}

export default Sidebar

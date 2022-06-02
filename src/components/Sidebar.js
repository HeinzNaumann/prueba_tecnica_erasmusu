import React from 'react'
import styles from './Sidebar.module.css'
import Button from '../common/Button'
import styles2 from '../common/Button.module.css'
const Sidebar = () => {
	return (
		<div className={styles.container}>
			<h2>Filters</h2>
			<label htmlFor='propertyType'>
				<p>Property Type</p>
			</label>
			<select id='propertyType' name='propertyType'>
				<option>All</option>
			</select>
			<label htmlFor='sortByPrice'>
				<p>Sort by Price</p>
			</label>
			<select id='sortByPrice' name='sortByPrice'>
				<option>Ascending</option>
				<option>Descendig</option>
			</select>
			<Button props={styles2.buttonClassOrange}>Download JSON</Button>
		</div>
	)
}

export default Sidebar

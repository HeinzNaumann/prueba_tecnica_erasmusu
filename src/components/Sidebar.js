import React from 'react'

const Sidebar = () => {
	return (
		<div>
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
			<button>Download JSON</button>
		</div>
	)
}

export default Sidebar

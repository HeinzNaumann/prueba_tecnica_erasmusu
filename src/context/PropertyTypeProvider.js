import { useState, useEffect, createContext, useCallback } from 'react'
import axios from 'axios'
const PropertyTypeContext = createContext()

const PropertyTypeProvider = ({ children }) => {
	//const [propertyIds, setPropertyIds] = useState([])
	const [propertyIdsFilter, setPropertyIdsFilter] = useState([])
	const [properties, setProperties] = useState([])
	const [loading, setLoading] = useState(true)
	let city = window.location.pathname
	if (city == '/') {
		city = 'madrid'
	}

	const getPropertyType = async value => {
		console.log("renders")
		try {
			const url = `/markers/${city}?type[]=${value}`
			const { data } = await axios(url)
			let ArrayDataString = []
			for (let i = 0; i < data.data.length; i++) {
				ArrayDataString.push(data.data[i].id)
				setPropertyIdsFilter(ArrayDataString)
			}
		} catch (error) {
			console.log(error)
		}
	}

	const getProperties = useCallback(async value => {

		try {
			let urlIds = []
			if (propertyIdsFilter.length > 1) {
				for (let i = 0; i < 30; i++) {
					urlIds.push(`&ids[]=${propertyIdsFilter[i]}`)
				}
			}
			const urlIdsString = urlIds.toString().replaceAll(',', '').substring(1)
			const url = `/homecards_ids?${urlIdsString}`
			const { data } = await axios(url)
			console.log(data)
			const order = data.data.homecards
			if (value === undefined || value === 'ascending') {
				order.sort((a, b) => {
					return a.pricePerMonth - b.pricePerMonth
				})
			} else {
				order.sort((a, b) => {
					return b.pricePerMonth - a.pricePerMonth
				})
			}
			setProperties(order)
			setLoading(false)
		} catch (error) {
			console.log(error)
		}
	}, [propertyIdsFilter]
	)
	useEffect(() => {
		getProperties()
	}, [propertyIdsFilter])

	return (
		<PropertyTypeContext.Provider
			value={{
				properties,
				getPropertyType,
				getProperties,
				loading,
				propertyIdsFilter,
			}}
		>
			{children}
		</PropertyTypeContext.Provider>
	)
}

export { PropertyTypeProvider }

export default PropertyTypeContext

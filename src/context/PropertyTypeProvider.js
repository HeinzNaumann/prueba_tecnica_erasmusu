import { useState, useEffect, createContext, useCallback } from 'react'
import axios from 'axios'
const PropertyTypeContext = createContext()

const PropertyTypeProvider = ({ children }) => {
	//const [propertyIds, setPropertyIds] = useState([])
	const [propertyIdsFilter, setPropertyIdsFilter] = useState([])
	const [properties, setProperties] = useState([])
	const [loading, setLoading] = useState(true)

	// console.log(loading, 'loading')
	// console.log(properties, 'properties')
	// console.log(propertyIdsFilter, 'propertyIdFilter')
	let city = window.location.pathname

	if (city == '/') {
		city = 'madrid'
	}

	const getPropertyType = async value => {
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

	const getProperties = async value => {
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
			const order = data.data.homecards

			order.sort(function (a, b) {
				if (a.pricePerMonth > b.pricePerMonth) {
					return 1
				}
			})

			if (value === 'ascending') {
				order.sort(function (a, b) {
					if (a.pricePerMonth > b.pricePerMonth) {
						return 1
					}
				})
			} else if (value === 'descending') {
				order.sort(function (a, b) {
					if (a.pricePerMonth < b.pricePerMonth) {
						return 1
					}
				})
			}
			setProperties(order)
		} catch (error) {
			console.log(error)
		}

		setLoading(false)
	}

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

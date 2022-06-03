import { useState, useEffect, createContext } from 'react'
import axios from 'axios'
const PropertyTypeContext = createContext()

const PropertyTypeProvider = ({ children }) => {
	const [propertyIds, setPropertyIds] = useState([])
	const [propertyIdsFilter, setPropertyIdsFilter] = useState([])
	const [properties, setProperties] = useState([])

	const getPropertyIds = async () => {
		try {
			const url = '/markers/madrid'
			const { data } = await axios(url)
			let ArrayDataString = []
			for (let i = 0; i < data.data.length; i++) {
				ArrayDataString.push(data.data[i].id)
				setPropertyIds(ArrayDataString)
			}
		} catch (error) {
			console.log(error)
		}
	}

	const getPropertyType = async value => {
		try {
			const url = `/markers/madrid?type[]=${value}`
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

	//Hacer un loop y coger solo los 30 primeros
	const getProperties = async value => {
		let urlIds = []
		if (propertyIdsFilter.length > 1) {
			for (let i = 0; i < 30; i++) {
				urlIds.push(`&ids[]=${propertyIdsFilter[i]}`)
			}
		} else {
			for (let i = 0; i < 30; i++) {
				urlIds.push(`&ids[]=${propertyIds[i]}`)
			}
		}
		const urlIdsString = urlIds.toString().replaceAll(',', '').substring(1)

		try {
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
	}

	const setOrderPrice = value => {}

	useEffect(() => {
		getPropertyIds()
		getProperties()
	}, [propertyIdsFilter])

	useEffect(() => {
		getProperties()
	}, [propertyIds])
	return (
		<PropertyTypeContext.Provider
			value={{
				properties,
				getPropertyType,
				setOrderPrice,
				getProperties,
			}}
		>
			{children}
		</PropertyTypeContext.Provider>
	)
}

export { PropertyTypeProvider }

export default PropertyTypeContext

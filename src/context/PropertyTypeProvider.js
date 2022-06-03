import { useState, useEffect, createContext } from 'react'
import axios from 'axios'
const PropertyTypeContext = createContext()

const PropertyTypeProvider = ({ children }) => {
	const [propertyIds, setPropertyIds] = useState([])
	const [propertyIdsFilter, setPropertyIdsFilter] = useState([])
	const [properties, setProperties] = useState([])

	const getPropertyIds = async () => {
		const url = '/markers/madrid'
		const { data } = await axios(url)
		let ArrayDataString = []
		for (let i = 0; i < data.data.length; i++) {
			ArrayDataString.push(data.data[i].id)
			setPropertyIds(ArrayDataString)
		}
	}

	const getPropertyType = async value => {
		const url = `/markers/madrid?type[]=${value}`
		const { data } = await axios(url)
		let ArrayDataString = []
		for (let i = 0; i < data.data.length; i++) {
			ArrayDataString.push(data.data[i].id)
			setPropertyIdsFilter(ArrayDataString)
		}
	}

	//Hacer un loop y coger solo los 30 primeros
	const getProperties = async () => {
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
		const url = `/homecards_ids?${urlIdsString}`
		const { data } = await axios(url)
		setProperties(data.data.homecards)
	}

	useEffect(() => {
		getPropertyIds()
		getProperties()
	}, [propertyIds, propertyIdsFilter])

	return (
		<PropertyTypeContext.Provider
			value={{
				propertyIds,
				properties,
				getPropertyType,
				getPropertyIds,
				getProperties,
			}}
		>
			{children}
		</PropertyTypeContext.Provider>
	)
}

export { PropertyTypeProvider }

export default PropertyTypeContext

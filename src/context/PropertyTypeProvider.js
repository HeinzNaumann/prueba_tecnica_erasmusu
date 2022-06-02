import { useState, useEffect, createContext } from 'react'

const PropertyTypeContext = createContext()

const PropertyTypeProvider = ({ children }) => {
	return (
		<PropertyTypeContext.Provider value={{}}>
			{children}
		</PropertyTypeContext.Provider>
	)
}

export { PropertyTypeProvider }

export default PropertyTypeContext

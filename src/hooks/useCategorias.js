import { useContext } from 'react'

import PropertyTypeContext from '../context/PropertyTypeProvider'

const usePropertyType = () => {
	return useContext(PropertyTypeContext)
}

export default usePropertyType

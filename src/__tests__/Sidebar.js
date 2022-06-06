import { fireEvent, getByTestId, render, screen } from '@testing-library/react'
import { PropertyTypeProvider } from '../context/PropertyTypeProvider'
import axios from 'axios'
import Sidebar from '../components/Sidebar'
import userEvent from '@testing-library/user-event'
import data from '../__mocks__/data'

jest.mock('axios')

const mockAxios = axios

const handleChange = jest.fn()
const handleChangePriceOrder = jest.fn()
const loading = jest.fn()
const exportData = jest.fn()

test('<Sidebar/> Cargar el formulario y revisar que esta todo correcto', async () => {
	render(
		<PropertyTypeProvider loading={loading}>
			<Sidebar
				handleChange={handleChange}
				handleChangePriceOrder={handleChangePriceOrder}
				exportData={exportData}
			/>
		</PropertyTypeProvider>
	)
	//expect(mockAxios.get).toHaveBeenCalled()
	// //ºwrapper.debug()

	const propertyDropdown = screen.getByTestId('select-property')

	expect(propertyDropdown.children.length).toEqual(5)

	fireEvent.change(propertyDropdown, 'apartaments')

	mockAxios.get = jest.fn().mockResolvedValue({
		data: data,
	})
})

import { render, screen } from '@testing-library/react'
import { PropertyTypeProvider } from '../context/PropertyTypeProvider'
import Sidebar from '../components/Sidebar'
import userEvent from '@testing-library/user-event'
import { rooms } from '../__mocks__/spotaroom'
test('<Sidebar/> Cargar el formulario y revisar que esta todo correcto', async () => {
	render(
		<PropertyTypeProvider>
			<Sidebar />
		</PropertyTypeProvider>
	)
	//ºwrapper.debug()

	const propertyDropdown = screen.getByTestId('select-property')

	expect(propertyDropdown.children.length).toEqual(5)
})

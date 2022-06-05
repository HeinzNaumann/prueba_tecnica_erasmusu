import { PropertyTypeProvider } from '../context/PropertyTypeProvider'
import { screen, render } from '@testing-library/react'
import Main from '../components/Main'

test('<Main probando los datos que vienen de la api', () => {
	render(
		<PropertyTypeProvider>
			<Main />
		</PropertyTypeProvider>
	)
	const properties = screen.findAllByTestId('properties')
	expect(properties).toMatchSnapshot()
})

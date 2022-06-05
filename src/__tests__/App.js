import { render, screen } from '@testing-library/react'
import { PropertyTypeProvider } from '../context/PropertyTypeProvider'
import App from '../App'

test('<App /> al aplicación funciona bien', async () => {
	render(
		<PropertyTypeProvider>
			<App />
		</PropertyTypeProvider>
	)
	// const linkElement = screen.getByText(/learn react/i);
	// expect(linkElement).toBeInTheDocument();
})

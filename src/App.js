import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Layout from './Layout/Layout'
import { PropertyTypeProvider } from './context/PropertyTypeProvider'
function App() {
	return (
		<PropertyTypeProvider>
			<Layout>
				<div className='App'>
					<h1>Prueba</h1>

					<FontAwesomeIcon icon={faCoffee} />
				</div>
			</Layout>
		</PropertyTypeProvider>
	)
}

export default App

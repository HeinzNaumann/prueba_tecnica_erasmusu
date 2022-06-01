import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Layout from './Layout/Layout'

function App() {
	return (
		<Layout>
			<div className='App'>
				<h1>Prueba</h1>
				<p>lorem ipsum es el mejor del mundo</p>
				<FontAwesomeIcon icon={faCoffee} />
			</div>
		</Layout>
	)
}

export default App

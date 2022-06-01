import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Layout from './Layout/Layout'
import Button from './components/Button'
import styles from './components/Button.module.css'
function App() {
	return (
		<Layout>
			<div className='App'>
				<h1>Prueba</h1>
				<p>lorem ipsum es el mejor del mundo</p>
				<Button props={styles.buttonClassOrange}>Siguiente</Button>
				<FontAwesomeIcon icon={faCoffee} />
			</div>
		</Layout>
	)
}

export default App

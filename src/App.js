import './App.css'
import Sidebar from './components/Sidebar'
import styles from './Layout/Layout.module.css'
import Layout from './Layout/Layout'
import { PropertyTypeProvider } from './context/PropertyTypeProvider'
import Main from './components/Main'
function App() {
	//const { properties } = usePropertyType()
	return (
		<PropertyTypeProvider>
			<Layout>
				<div className={styles.container}>
					<aside>
						<Sidebar />
					</aside>
					<main>
						<Main />
					</main>
				</div>
			</Layout>
		</PropertyTypeProvider>
	)
}

export default App

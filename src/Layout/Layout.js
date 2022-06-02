import Logo from '../assets/img/Logo_SpotARoom.png'
import Sidebar from '../components/Sidebar'
import styles from './Layout.module.css'
const Layout = ({ children }) => {
	return (
		<>
			<header>
				<img width='300px' height='auto' src={Logo} alt='Logo of Spot A Room' />
			</header>
			<div className={styles.container}>
				<aside>
					<Sidebar />
				</aside>
				<main>{children}</main>
			</div>
			<footer>
				<p>Footer</p>
			</footer>
		</>
	)
}

export default Layout

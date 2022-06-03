import Logo from '../assets/img/Logo_SpotARoom.png'

const Layout = ({ children }) => {
	return (
		<>
			<header>
				<img width='300px' height='auto' src={Logo} alt='Logo of Spot A Room' />
			</header>

			{children}

			<footer>
				<p>Footer</p>
			</footer>
		</>
	)
}

export default Layout

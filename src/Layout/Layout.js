import Logo from '../assets/img/Logo_SpotARoom.png'

const Layout = ({ children }) => {
	return (
		<>
			<header>
				<img width='300px' height='auto' src={Logo} alt='Logo of Spot A Room' />
			</header>

			{children}

			<footer>
				<img width='200px' height='auto' src={Logo} alt='Logo of Spot A Room' />
				<p>Copyright @ 2022</p>
			</footer>
		</>
	)
}

export default Layout

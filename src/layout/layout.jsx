import Navbar from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const Layout = ({ children }) => {
	return (
		<div>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;

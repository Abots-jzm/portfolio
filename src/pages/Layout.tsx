import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { styled } from "styled-components";
import MouseEffect from "../components/MouseEffect";
import Footer from "../components/Footer";

function Layout() {
	return (
		<>
			<MouseEffect />
			<Overflow>
				<Container>
					<Header />
					<Outlet />
					<Footer />
				</Container>
			</Overflow>
		</>
	);
}

export default Layout;

const Container = styled.main`
	max-width: 110rem;
	padding: 0 2rem;
	margin: 0 auto;
	margin-bottom: 10rem;
`;

const Overflow = styled.div`
	overflow-x: hidden;
`;

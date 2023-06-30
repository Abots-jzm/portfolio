import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { styled } from "styled-components";
import MouseEffect from "../components/MouseEffect";

function Layout() {
	return (
		<>
			<MouseEffect />
			<Container>
				<Header />
				<Outlet />
			</Container>
		</>
	);
}

export default Layout;

const Container = styled.main`
	max-width: 110rem;
	padding: 0 2rem;
	margin: 0 auto;
	margin-bottom: 10rem;
	overflow-x: hidden;
`;

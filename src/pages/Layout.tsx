import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { styled } from "styled-components";

function Layout() {
	return (
		<Container>
			<Header />
			<Outlet />
		</Container>
	);
}

export default Layout;

const Container = styled.div`
	max-width: 110rem;
	padding: 0 1rem;
	margin: 0 auto;
`;

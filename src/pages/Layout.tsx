import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { styled } from "styled-components";

function Layout() {
	return (
		<Overflow>
			<Header />
			<Container>
				<Outlet />
			</Container>
		</Overflow>
	);
}

export default Layout;

const Container = styled.main`
	max-width: 110rem;
	padding: 0 2rem;
	margin: 0 auto;
	position: relative;
	margin-bottom: 10rem;
`;

const Overflow = styled.div`
	overflow-x: hidden;
`;

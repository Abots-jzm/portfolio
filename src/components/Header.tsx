import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import { socials } from "../data";

function Header() {
	return (
		<Container>
			<Link to="/">abots.</Link>
			<Socials>
				<a href={socials.github} target="_blank">
					<BsGithub />
				</a>
				<a href={socials.linkedin} target="_blank">
					<BsLinkedin />
				</a>
				<a href={socials.twitter} target="_blank">
					<BsTwitter />
				</a>
			</Socials>
		</Container>
	);
}

export default Header;

const Socials = styled.div`
	display: flex;
	gap: 2.4rem;
`;

const Container = styled.div`
	padding: 5rem 0;
	display: flex;
	justify-content: space-between;
	align-content: center;
	color: #555;
	font-size: 2.4rem;
	font-weight: 600;
`;

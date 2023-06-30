import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import { socials } from "../data";

function Header() {
	return (
		<Container>
			<div>
				<Logo to="/">abots.</Logo>
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
			</div>
		</Container>
	);
}

export default Header;

const Logo = styled(Link)`
	transition: all 0.3s;

	&:hover {
		color: var(--color-purple-light);
	}
`;

const Socials = styled.div`
	display: flex;
	gap: 2.4rem;

	& > * {
		transition: all 0.3s;

		&:hover {
			color: var(--color-purple-light);
		}
	}
`;

const Container = styled.div`
	padding: 5rem 0 2rem;

	color: #555;
	font-size: 2.4rem;
	font-weight: 600;
	position: sticky;
	top: 0;
	background-color: var(--color-primary-black);
	z-index: 200;

	& > div {
		max-width: 110rem;
		padding: 0 2rem;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-content: center;
	}

	@media (max-width: 600px) {
		padding: 2rem 0;
	}
`;

import { ReactNode } from "react";
import { styled } from "styled-components";

type Props = {
	children: ReactNode;
};

function SectionTitle({ children }: Props) {
	return (
		<Container>
			<span className="slash">/</span>
			{children}
			<WaterMark>{children}</WaterMark>
		</Container>
	);
}

export default SectionTitle;

const WaterMark = styled.div`
	position: absolute;
	top: -10rem;
	left: -5rem;
	color: #555;
	opacity: 10%;
	z-index: -5;
	font-weight: 700;
	font-size: 20rem;

	@media (max-width: 600px) {
		left: -10rem;
		font-size: 15rem;
		top: -7.5rem;
	}
`;

const Container = styled.div`
	font-size: 3.2rem;
	margin: 15rem 0 10rem;
	position: relative;

	.slash {
		color: var(--color-purple-light);
	}

	@media (max-width: 600px) {
		margin: 7.5rem 0 5rem;
	}
`;

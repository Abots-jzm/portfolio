import { motion } from "framer-motion";
import { ReactNode } from "react";
import { css, styled } from "styled-components";

type Props = {
	children: ReactNode;
	title: string;
	rowSpan?: number;
	columnSpan?: number;
};

function BentoCard({ children, title, ...config }: Props) {
	return (
		<Container
			{...config}
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}
			viewport={{ once: true }}
		>
			<Title>{title}</Title>
			{children}
		</Container>
	);
}

export default BentoCard;

const Title = styled.div`
	font-size: 2.8rem;
	font-weight: 600;
	margin-bottom: 2rem;
	background-image: var(--color-gradient-purple);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

	@media (max-width: 600px) {
		margin-bottom: 1.5rem;
	}
`;

type ContainerProps = {
	rowSpan?: number;
	columnSpan?: number;
};

const Container = styled(motion.div)<ContainerProps>`
	border-radius: 16px;
	padding: 3rem;
	border: 1px solid #d9bfff33;
	border-bottom: none;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
	background-color: #1b1b1b70;

	${({ columnSpan }) =>
		columnSpan
			? css`
					grid-column: span ${columnSpan};
			  `
			: ""}

	${({ rowSpan }) =>
		rowSpan
			? css`
					grid-row: span ${rowSpan};
			  `
			: ""}

	@media (max-width: 600px) {
		padding: 2rem;
	}
`;

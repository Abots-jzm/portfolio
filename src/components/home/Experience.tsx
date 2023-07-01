import { motion } from "framer-motion";
import { styled } from "styled-components";

type Props = {
	logo: string;
	time: string;
	name: string;
	description: string;
};

function Experience({ logo, time, name, description }: Props) {
	return (
		<Container
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
		>
			<Logo>
				<img src={logo} alt={name + " logo"} />
			</Logo>
			<Details>
				<Time>{time}</Time>
				<Name>{name}</Name>
				<Description>{description}</Description>
			</Details>
		</Container>
	);
}

export default Experience;

const Description = styled.div`
	color: #ccc;
	font-size: 1.6rem;
	font-weight: 300;
`;

const Name = styled.div`
	font-size: 1.8rem;
	font-weight: 700;
	color: var(--color-purple-light);
`;

const Time = styled.div`
	color: #828282;
	font-size: 1.2rem;
	font-family: Montserrat;
	font-weight: 500;
`;

const Details = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	flex: 1;
`;

const Logo = styled.div`
	width: 3rem;
	height: 3rem;
	border-radius: 50%;
	overflow: hidden;
	margin-top: 1.8rem;

	img {
		object-fit: contain;
	}
`;

const Container = styled(motion.div)`
	display: flex;
	gap: 2rem;
`;

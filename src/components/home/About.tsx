import { styled } from "styled-components";
import SectionTitle from "./SectionTitle";
import BentoCard from "./BentoCard";
import { About as AboutData } from "../../data";
import Experience from "./Experience";
import { motion } from "framer-motion";

function About() {
	const { experiences, whatIDo, techIUse, location } = AboutData;
	const [line1, line2] = location.split(",");

	return (
		<motion.section
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}
			viewport={{ once: true }}
		>
			<SectionTitle>about</SectionTitle>
			<Grid>
				<BentoCard title="what I do" columnSpan={2}>
					<WhatIDo>{whatIDo}</WhatIDo>
				</BentoCard>
				<BentoCard title="experiences" rowSpan={2}>
					<Experiences>
						{experiences.map((experience, i) => (
							<Experience key={i} {...experience} />
						))}
					</Experiences>
				</BentoCard>
				<BentoCard title="tech I use">
					<Technologies>
						{techIUse.map((tech, i) => (
							<Technology key={i}>{tech}</Technology>
						))}
					</Technologies>
				</BentoCard>
				<BentoCard title="where I stay">
					<WhereIStay>
						<motion.svg
							initial={{ strokeDashoffset: 500 }}
							whileInView={{ strokeDashoffset: 0 }}
							transition={{ duration: 10 }}
							viewport={{ once: true }}
						>
							<text x="50%" dominant-baseline="middle" text-anchor="middle" y="50%">
								{line1}
							</text>
						</motion.svg>
						<motion.svg
							initial={{ strokeDashoffset: 500 }}
							whileInView={{ strokeDashoffset: 0 }}
							transition={{ duration: 10 }}
							viewport={{ once: true }}
						>
							<text x="50%" dominant-baseline="middle" text-anchor="middle" y="50%">
								{line2}
							</text>
						</motion.svg>
					</WhereIStay>
				</BentoCard>
			</Grid>
		</motion.section>
	);
}

export default About;

const WhereIStay = styled.div`
	padding-top: 2.5rem;

	svg {
		stroke-dasharray: 500;
		font-size: 80px;
		fill-opacity: 0;
		width: 100%;
		height: 8rem;
		stroke: #ccc;
		stroke-width: 1;

		text {
			font-size: 4.8rem;
		}
	}
`;

const WhatIDo = styled.div`
	color: #ccc;
	font-size: 1.6rem;
	font-weight: 300;
`;

const Technologies = styled.div`
	display: flex;
	flex-wrap: wrap;
	font-size: 1.2rem;
	column-gap: 2rem;
	row-gap: 1rem;

	@media (max-width: 1024px) {
		column-gap: 1rem;
	}
`;

const Technology = styled.div`
	align-self: flex-start;
	padding: 0.5rem 1rem;
	font-size: 1.2rem;
	border-radius: 4px;
	border: 1px solid #d9bfff55;
	display: grid;
	place-items: center;
	padding-top: 8px;
`;

const Experiences = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3.6rem;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 2rem;

	@media (max-width: 900px) {
		display: flex;
		flex-direction: column;
	}
`;

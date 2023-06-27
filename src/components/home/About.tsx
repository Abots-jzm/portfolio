import { styled } from "styled-components";
import SectionTitle from "./SectionTitle";
import BentoCard from "./BentoCard";
import { About as AboutData } from "../../data";
import Experience from "./Experience";

function About() {
	const { experiences, whatIDo, techIUse, location } = AboutData;

	return (
		<section>
			<SectionTitle>about</SectionTitle>
			<Grid>
				<BentoCard title="experiences" rowSpan={2}>
					<Experiences>
						{experiences.map((experience) => (
							<Experience {...experience} />
						))}
					</Experiences>
				</BentoCard>
				<BentoCard title="what I do" columnSpan={2}>
					<WhatIDo>{whatIDo}</WhatIDo>
				</BentoCard>
				<BentoCard title="tech I use">
					<Technologies>
						{techIUse.map((tech) => (
							<Technology>{tech}</Technology>
						))}
					</Technologies>
				</BentoCard>
				<BentoCard title="where I stay">
					<WhereIStay>{location}</WhereIStay>
				</BentoCard>
			</Grid>
		</section>
	);
}

export default About;

const WhereIStay = styled.div`
	padding-top: 1rem;
	font-size: 4.8rem;
	font-weight: 700;
	line-height: 1.5;
	color: transparent;
	-webkit-text-stroke: 1px;
	-webkit-text-stroke-color: #ccc;
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
`;

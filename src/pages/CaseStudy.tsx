import { useParams } from "react-router-dom";
import BreadCrumbs from "../components/case study/BreadCrumbs";
import { styled } from "styled-components";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { projectDetails } from "../data";
import { useEffect } from "react";

function CaseStudy() {
	const { projectName } = useParams();
	const formattedName = projectName?.split("-").join(" ") || "portfolio";
	const project = projectDetails.find((detail) => detail.name === formattedName);

	useEffect(() => {
		window.scroll({
			top: 0,
			behavior: "instant",
		});
	}, []);

	return (
		<Container>
			<BreadCrumbs path={project?.name} />
			<Picture>
				<img src={project?.image} alt="afdaf" />
			</Picture>
			<div>
				<Heading>Project Overview</Heading>
				<p>{project?.overview}</p>
			</div>
			{project?.features && (
				<Section>
					<Heading>Key features</Heading>
					<ul>
						{project?.features.map((tech, i) => (
							<li key={i}>{tech}</li>
						))}
					</ul>
				</Section>
			)}
			<Section>
				<Heading>Technologies used</Heading>
				<ul>
					{project?.technologies.map((tech, i) => (
						<li key={i}>{tech}</li>
					))}
				</ul>
			</Section>
			<Actions>
				{project?.live && (
					<a href={project.live} target="_blank">
						<span>view site</span>
						<div className="icon">
							<BiLinkExternal />
						</div>
					</a>
				)}
				{project?.github && (
					<a href={project.github} target="_blank">
						<div className="icon">
							<BsGithub />
						</div>
						<span>github code</span>
					</a>
				)}
			</Actions>
		</Container>
	);
}

export default CaseStudy;

const Actions = styled.div`
	margin-top: 5rem;
	color: white;
	display: flex;
	gap: 2rem;

	.icon {
		display: grid;
		place-items: center;
	}

	a {
		background-color: var(--color-purple-primary);
		padding: 1rem;
		border-radius: 8px;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		white-space: nowrap;
		transition: all 0.3s;

		&:hover {
			scale: 1.05;
		}
	}

	a:last-child {
		background-color: transparent;
		border: 1px solid var(--color-purple-light);
		color: var(--color-purple-light);
	}
`;

const Section = styled.div`
	margin-top: 5rem;

	ul {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		li {
			list-style: inside circle;
		}
	}
`;

const Heading = styled.h2`
	font-weight: 400;
	margin-bottom: 1rem;
	color: var(--color-purple-light);
`;

const Picture = styled.div`
	margin: 4rem 0 6rem;
	border-radius: 12px;
	overflow: hidden;

	img {
		display: block;
		object-fit: contain;
	}
`;

const Container = styled.div`
	color: #ccc;
	font-weight: 300;
	line-height: 1.5;
`;

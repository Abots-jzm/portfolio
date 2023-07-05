import { styled } from "styled-components";
import { Project } from "../../types";
import { BsSearch } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { motion } from "framer-motion";

type Props = {
	project: Project;
};

function MobileProjectCard({ project }: Props) {
	return (
		<Container
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}
			viewport={{ once: true }}
		>
			<Picture>
				<img src={project.image} alt={project.name + " pic"} />
			</Picture>
			<Details>
				<div>{project.description}</div>
				<div className="buttons">
					<button>
						<div className="icon">
							<BsSearch />
						</div>
						<span>case study</span>
					</button>
					<a href={project.live} target="_blank">
						<span>view site</span>
						<div className="icon">
							<BiLinkExternal />
						</div>
					</a>
				</div>
			</Details>
		</Container>
	);
}

export default MobileProjectCard;

const Details = styled.div`
	padding: 1rem;
	padding-top: 3rem;

	.icon {
		display: grid;
		place-items: center;
	}

	.buttons {
		background-color: transparent;
		color: white;
		display: flex;
		gap: 1rem;
		margin-top: 2rem;
		flex-wrap: wrap;

		button,
		a {
			flex: 1;
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

		a {
			background-color: transparent;
			border: 1px solid var(--color-purple-light);
			color: var(--color-purple-light);
		}
	}
`;

const Picture = styled.div`
	height: 20rem;
	border-radius: 8px 8px 0 0;
	overflow: hidden;

	img {
		object-position: top;
	}
`;

const Container = styled(motion.div)`
	border-radius: 16px;
	padding: 1.5rem;
	border: 1px solid #d9bfff33;
	border-bottom: none;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
	background-color: #1b1b1b70;
`;

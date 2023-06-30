import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { css, styled } from "styled-components";
import useScreenSize from "../../hooks/useScreenSize";
import { BsSearch } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { projects as projectsData } from "../../data";

function ProjectsCarousel() {
	const [activeIndex, setActiveIndex] = useState(4);
	const [projects, setProjects] = useState(projectsData);
	const { screenWidth } = useScreenSize();
	const noOfProjects = projects.length;

	function handleSlideClick(index: number) {
		const max = screenWidth > 600 ? 8 : 5;
		activateSlide(index);
		if (index < 3 || index > max) return;
		if (index === max) nextSlide(index);
		if (index === 3) prevSlide(index);
	}

	function prevSlide(index: number) {
		setProjects((prev) => {
			const newState = [...prev];
			const last = newState.pop();
			if (last) {
				last.id -= noOfProjects;
				newState.unshift(last);
			}
			return newState;
		});
		activateSlide(index + 1);
	}

	function nextSlide(index: number) {
		setProjects((prev) => {
			const newState = [...prev];
			const first = newState.shift();
			if (first) {
				first.id += noOfProjects;
				newState.push(first);
			}
			return newState;
		});
		activateSlide(index - 1);
	}

	function activateSlide(index: number) {
		setActiveIndex(index);
	}

	return (
		<Container>
			<CarouselList>
				<AnimatePresence>
					{projects.map((project, i) => (
						<CarouselItem key={project.id} active={activeIndex === i} onClick={() => handleSlideClick(i)}>
							<img src={project.image} alt={project.name + " pic"} />
							<Info active={activeIndex === i}>
								<div className="name">{project.name}</div>
								<div className="details-overlay">
									<div className="details">
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
									</div>
								</div>
							</Info>
						</CarouselItem>
					))}
				</AnimatePresence>
			</CarouselList>
			<Button onClick={() => nextSlide(activeIndex + 1)}>next</Button>
			<Button onClick={() => prevSlide(activeIndex - 1)}>prev</Button>
		</Container>
	);
}

export default ProjectsCarousel;

type CarouselItemProps = {
	active?: boolean;
};

const Info = styled.div<CarouselItemProps>`
	position: absolute;
	inset: 0;
	background-color: rgba(0, 0, 0, ${(props) => (props.active ? 0.8 : 0.85)});

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

		button,
		a {
			background-color: var(--color-purple-primary);
			padding: 1rem;
			border-radius: 8px;
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 1rem;
			white-space: nowrap;
		}

		a {
			background-color: transparent;
			border: 1px solid var(--color-purple-light);
			color: var(--color-purple-light);
		}
	}

	.details-overlay {
		background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.6));
		height: 25rem;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		translate: 0 ${(props) => (props.active ? "0" : "100%")};
		/* padding: 10rem 1rem 0; */
	}

	.details {
		padding: 0 1rem 5rem;
		position: absolute;
		bottom: 0;
	}

	.name {
		font-size: 7.2rem;
		transform-origin: left;
		rotate: 90deg;
		margin-left: 4.5rem;
		margin-top: -2rem;
		color: var(--color-purple-light);
		white-space: nowrap;

		${(props) =>
			props.active &&
			css`
				rotate: 0deg;
				margin-left: 2rem;
				margin-top: 2rem;
				font-size: 3.2rem;
				background-image: var(--color-gradient-purple);
				background-clip: text;
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			`}
	}

	@media (max-width: 1024px) {
		.name {
			font-size: 6.4rem;
			margin-left: 3rem;
		}
	}

	@media (max-width: 900px) {
		.name {
			font-size: 3.2rem;
			margin-top: 2rem;
			margin-left: 2rem;
		}

		.buttons {
			flex-direction: column;
		}

		.details {
			padding-bottom: 2rem;
		}

		.icon {
			display: none;
		}
	}

	@media (max-width: 600px) {
		.name {
			font-size: 2.4rem;
			margin-top: 1rem;
			margin-left: 1rem;
		}

		.details {
			font-size: 1.4rem;
		}
	}
`;

const Button = styled.div`
	background-color: transparent;
`;

const CarouselItem = styled.li<CarouselItemProps>`
	flex: 1 1 10%;
	height: 50rem;
	overflow: hidden;
	border-radius: 16px;
	border: 1px solid #d9bfff33;
	border-bottom: none;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
	contain: layout;
	isolation: isolate;
	cursor: pointer;
	position: relative;

	&,
	& * {
		transition: all 0.6s cubic-bezier(0.55, 0.24, 0.18, 1);
		user-select: none;
	}

	&:hover {
		flex-basis: calc(var(--width) / 2);
		transition: all 0.3s ease;
	}

	${(props) =>
		props.active &&
		css`
			flex-basis: var(--width) !important;
			flex-grow: 0 !important;
		`}

	&:nth-child(3),
	&:nth-child(10) {
		flex: 0 0 1rem;
	}

	&:nth-child(2),
	&:nth-child(11) {
		flex: 0 0 0.5rem;
		transform: translateX(-10rem);
	}

	&:nth-child(11) {
		transform: translateX(10rem);
	}

	&:nth-child(1),
	&:nth-child(n + 12) {
		flex: 0 0 0px;
		box-shadow: none;
		opacity: 0 !important;
	}

	&:not(:nth-child(n + 5)) img,
	&:nth-child(n + 9) img {
		opacity: 0.8;
	}

	/* &:not(:nth-child(n + 4)) *:not(img),
	&:nth-child(n + 10) *:not(img) {
		opacity: 0 !important;
	} */

	@media (max-width: 800px) {
		flex-basis: 15%;
	}

	@media screen and (max-width: 600px) {
		flex-basis: 10%;
		border-radius: 8px;
		height: 45rem;

		&:hover {
			flex-basis: calc(var(--width) / 8);
		}

		${(props) =>
			props.active &&
			css`
				flex-basis: 45% !important;
				flex-grow: 0 !important;
			`}

		&:nth-child(3),
		&:nth-child(7) {
			flex: 0 0 1rem;
		}

		&:nth-child(2),
		&:nth-child(8) {
			flex: 0 0 0.5rem;
			transform: translateX(-10rem);
		}

		&:nth-child(8) {
			transform: translateX(10rem);
		}

		&:nth-child(1),
		&:nth-child(n + 9) {
			flex: 0 0 0px;
			margin: 0;
			box-shadow: none;
			opacity: 0 !important;
		}

		&:not(:nth-child(n + 5)) img,
		&:nth-child(n + 7) img {
			opacity: 0.8;
		}

		/* &:not(:nth-child(n + 4)) *,
		&:nth-child(n + 7) * {
			opacity: 0 !important;
		} */
	}
`;

const CarouselList = styled.ul`
	display: flex;
	overflow: hidden;
	list-style: none;
	gap: 2rem;
	contain: layout;
	isolation: isolate;
	padding-bottom: 3rem;

	@media screen and (max-width: 600px) {
		gap: 1rem;
	}
`;

const Container = styled.div``;

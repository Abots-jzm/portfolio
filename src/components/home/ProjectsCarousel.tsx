import { useState } from "react";
import { styled } from "styled-components";
import useScreenSize from "../../hooks/useScreenSize";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { mobileProjects, projects as projectsData } from "../../data";
import CarouselItem from "./CarouselItem";
import MobileProjectCard from "./MobileProjectCard";
import { AnimatePresence } from "framer-motion";

const CAROUSEL_BREAKPOINT = 600;

function ProjectsCarousel() {
	const [activeIndex, setActiveIndex] = useState(4);
	const [projects, setProjects] = useState(projectsData);
	const [showMore, setShowMore] = useState(false);
	const { screenWidth } = useScreenSize();
	const noOfProjects = projects.length;

	function handleSlideClick(index: number) {
		const max = screenWidth > CAROUSEL_BREAKPOINT ? 8 : 5;
		if (index < 3 || index > max) return;
		activateSlide(index);
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
			{screenWidth <= CAROUSEL_BREAKPOINT && (
				<AnimatePresence>
					{mobileProjects.slice(0, showMore ? -1 : 5).map((project) => (
						<MobileProjectCard project={project} key={project.id} />
					))}
					<ShowMore onClick={() => setShowMore((prev) => !prev)}>show {showMore ? "less" : "more"}</ShowMore>
				</AnimatePresence>
			)}
			{screenWidth > CAROUSEL_BREAKPOINT && (
				<>
					<CarouselList>
						{projects.map((project, i) => (
							<CarouselItem
								key={project.id}
								active={activeIndex === i}
								onClick={() => handleSlideClick(i)}
								project={project}
							/>
						))}
					</CarouselList>
					<NavBtns>
						<button onClick={() => prevSlide(activeIndex - 1)}>
							<BsChevronLeft />
						</button>
						<button onClick={() => nextSlide(activeIndex + 1)}>
							<BsChevronRight />
						</button>
					</NavBtns>
				</>
			)}
		</Container>
	);
}

export default ProjectsCarousel;

const ShowMore = styled.button`
	background-color: transparent;
	padding: 1rem;
	border: 1px solid var(--color-purple-light);
	border-radius: 8px;
	color: var(--color-purple-light);
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	white-space: nowrap;
	align-self: flex-start;
	transition: all 0.3s;

	&:hover {
		scale: 1.05;
	}
`;

const CarouselList = styled.ul`
	display: flex;
	list-style: none;
	gap: 2rem;
	contain: layout;
	isolation: isolate;

	@media screen and (max-width: 900px) {
		gap: 1rem;
	}
`;

const Container = styled.div`
	overflow: hidden;
	padding-bottom: 3rem;
	position: relative;

	@media (max-width: 600px) {
		display: flex;
		flex-direction: column;
		gap: 3rem;
		overflow: visible;
	}
`;

const NavBtns = styled.div`
	position: absolute;
	width: 100%;
	top: 45%;
	display: flex;
	justify-content: space-between;

	button {
		background-color: transparent;
		font-size: 3.2rem;
		color: var(--color-purple-light);

		@media (max-width: 600px) {
			font-size: 2.4rem;

			&:last-child {
				margin-right: 7vw;
			}
		}
	}
`;

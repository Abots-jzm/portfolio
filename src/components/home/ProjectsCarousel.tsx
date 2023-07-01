import { useState } from "react";
import { styled } from "styled-components";
import useScreenSize from "../../hooks/useScreenSize";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { projects as projectsData } from "../../data";
import CarouselItem from "./CarouselItem";

function ProjectsCarousel() {
	const [activeIndex, setActiveIndex] = useState(4);
	const [projects, setProjects] = useState(projectsData);
	const { screenWidth } = useScreenSize();
	const noOfProjects = projects.length;

	function handleSlideClick(index: number) {
		const max = screenWidth > 600 ? 8 : 5;
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
		</Container>
	);
}

export default ProjectsCarousel;

const CarouselList = styled.ul`
	display: flex;
	list-style: none;
	gap: 2rem;
	contain: layout;
	isolation: isolate;

	@media screen and (max-width: 600px) {
		gap: 1rem;
	}
`;

const Container = styled.div`
	overflow: hidden;
	padding-bottom: 3rem;
	position: relative;
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

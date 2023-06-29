import { MouseEvent, ReactNode, useState } from "react";
import { css, styled } from "styled-components";

const shit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function ProjectsWidget() {
	const [activeIndex, setActiveIndex] = useState(4);

	function handleSlideClick(e: MouseEvent<HTMLLIElement>, index: number) {
		const max = window.matchMedia("screen and ( max-width: 600px)").matches ? 5 : 8;
		const slide = e.target as Element;
		if (index < 3 || index > max) return;
		activateSlide(index);
		if (index === max) nextSlide(index);
		if (index === 3) prevSlide(index);
		// activateSlide(index, slide);
	}

	function prevSlide(index: number) {
		// const index = getActiveIndex();
		// const $slides = $q(".carousel__item");
		// const first = slides[0];

		const last = shit.pop();
		last && shit.unshift(last);
		activateSlide(index);

		// activateSlide(index, slides[activeIndex]);
		// $first.remove();
		// $list.append($first);
		// activateSlide($q(".carousel__item")[index]);
	}
	function nextSlide(index: number) {
		// const index = getActiveIndex();
		// const $slides = $q(".carousel__item");
		// const first = slides[0];
		const first = shit.shift();
		first && shit.push(first);
		activateSlide(index - 1);
		// activateSlide(index, slides[activeIndex]);

		// $first.remove();
		// $list.append($first);
		// activateSlide($q(".carousel__item")[index]);
	}

	function activateSlide(index: number) {
		// if (!slide) return;
		setActiveIndex(index);
	}

	return (
		<Courasel>
			<CouraselList>
				{shit.map((shitter, index) => (
					<CouraselItem
						key={index}
						active={activeIndex === index}
						onClick={(e) => handleSlideClick(e, index)}
						tabIndex={0}
					>
						{shitter}
					</CouraselItem>
				))}
			</CouraselList>
		</Courasel>
	);
}

export default ProjectsWidget;

type CouraselItemProps = {
	active?: boolean;
};

const CouraselItem = styled.li<CouraselItemProps>`
	display: grid;
	position: relative;
	align-content: start;
	margin: 0 10px;
	padding: 0;
	flex: 1 1 10%;
	height: 50rem;
	overflow: hidden;
	background: rgba(255, 255, 255, 0.2);
	border-radius: 16px;
	transform: translate3d(0, 0, 0.1px);
	box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 15px 2px, rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
		rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
	contain: layout;
	isolation: isolate;

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
		props.active
			? css`
					flex-basis: var(--width) !important;
					flex-grow: 0 !important;
			  `
			: ""}

	/* &[data-active] {
		flex-basis: var(--width);
		flex-grow: 0;
	} */

	@media (max-width: 800px) {
		flex-basis: 15%;
	}

	@media screen and (max-width: 600px) {
		flex-basis: 10%;
		margin: 0 5px;
		border-radius: 8px;
		font-size: 3vw;

		&[data-active] {
			flex-basis: 45%;
			flex-grow: 0;
		}

		&:nth-child(3),
		&:nth-child(7) {
			flex: 0 0 10px;
		}

		&:nth-child(2),
		&:nth-child(8) {
			flex: 0 0 5px;
			transform: translateX(-50px);
		}

		&:nth-child(8) {
			transform: translateX(50px);
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

		&:not(:nth-child(n + 4)) *,
		&:nth-child(n + 7) * {
			opacity: 0 !important;
		}
	}

	@media (min-width: 600px) {
		&:nth-child(3),
		&:nth-child(10) {
			flex: 0 0 10px;
		}

		&:nth-child(2),
		&:nth-child(11) {
			flex: 0 0 5px;
			transform: translateX(-50px);
		}

		&:nth-child(11) {
			transform: translateX(50px);
		}

		&:nth-child(1),
		&:nth-child(n + 12) {
			flex: 0 0 0px;
			margin: 0;
			box-shadow: none;
			opacity: 0 !important;
		}

		&:not(:nth-child(n + 5)) img,
		&:nth-child(n + 9) img {
			opacity: 0.8;
		}

		&:not(:nth-child(n + 4)) *,
		&:nth-child(n + 10) * {
			opacity: 0 !important;
		}
	}

	&::after {
		content: "";
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		opacity: 1;
		background: linear-gradient(
			160deg,
			rgba(2, 0, 36, 0) 40%,
			rgba(118, 221, 136, 0.5) 70%,
			rgba(0, 255, 246, 0.6) 100%
		);
		transition: all 0.66s cubic-bezier(0.55, 0.24, 0.18, 1);
	}

	${(props) =>
		props.active
			? css`
					&::after {
						transform: translateY(100%);
					}

					&,
					& * {
						opacity: 1;
						filter: none;
					}
			  `
			: ""}/* &[data-active]::after {
		transform: translateY(100%);
	}

	&[data-active],
	&[data-active] * {
		opacity: 1;
		filter: none;
	} */
`;

const CouraselList = styled.ul`
	display: flex;
	overflow: hidden;
	list-style: none;
	padding: 2em 0 3em;
	margin: 0;
	contain: layout;
	isolation: isolate;
`;

const Courasel = styled.div`
	display: grid;
	transform: translate3d(0, 0, 0.1px);
`;

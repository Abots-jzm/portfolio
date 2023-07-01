import { BiLinkExternal } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { css, styled } from "styled-components";

type Props = {
	active: boolean;
	onClick: () => void;
	project: { id: number; name: string; description: string; image: string; live: string };
};

function CarouselItem({ active, onClick, project }: Props) {
	return (
		<Container active={active} onClick={onClick}>
			<img src={project.image} alt={project.name + " pic"} />
			<Info active={active}>
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
		</Container>
	);
}

export default CarouselItem;

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

	.details-overlay {
		background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.6));
		height: 25rem;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		translate: 0 ${(props) => (props.active ? "0" : "100%")};
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
			margin-left: 1.3rem;

			${(props) =>
				props.active &&
				css`
					max-width: 90%;
					overflow-wrap: break-word;
					word-wrap: break-word;
					-webkit-hyphens: auto;
					-ms-hyphens: auto;
					-moz-hyphens: auto;
					hyphens: auto;
					margin-left: 1rem;
					margin-right: 1rem;
					margin-top: 2rem;
					white-space: normal;
				`}
		}

		.details {
			font-size: 1.4rem;
		}
	}
`;

const Container = styled.li<CarouselItemProps>`
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
		cursor: default;
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
			cursor: default;
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
	}
`;

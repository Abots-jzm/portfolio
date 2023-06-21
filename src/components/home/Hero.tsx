import { styled } from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import PicturePNG from "../../assets/abots-pic.png";

function Hero() {
	return (
		<Container>
			<div>
				<div>Hi, My name is</div>
				<div className="name">
					Oluwatobi
					<br />
					Abolarin S.
				</div>
				<div>
					a passionate front-end developer dedicated to crafting engaging and intuitive digital experiences. With a
					knack for clean code and an eye for detail, I bring life to designs and turn ideas into reality. Join me on
					this journey of innovation and creativity.
				</div>
				<button>
					<span>Let's connect</span>
					<BsArrowRight />
				</button>
			</div>
			<Picture>
				<img src={PicturePNG} alt="yoo" />
			</Picture>
		</Container>
	);
}

export default Hero;

const Picture = styled.div`
	position: relative;
	border-radius: 50%;
	overflow: hidden;
`;

const Container = styled.div`
	margin-top: 5rem;
	display: flex;
	gap: 1rem;
	line-height: 1.5;
	align-items: center;

	& > div {
		flex: 1;
	}

	.name {
		margin: 2rem 0;
		font-size: 4.8rem;
		font-weight: 700;
		background-image: linear-gradient(135deg, var(--color-purple-light), var(--color-purple-primary));
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		line-height: 1.3;
	}

	button {
		background-color: transparent;
		margin-top: 3rem;
		font-size: 1.8rem;
		font-weight: 700;
		display: flex;
		align-items: center;
		gap: 1.4rem;

		--c: linear-gradient(var(--color-purple-primary) 0 0);

		padding-bottom: 3px;
		background: var(--c), var(--c);
		background-size: 3px 3px;
		background-position: 50% 100%;
		background-repeat: no-repeat;
		transition: 0.3s linear, background-size 0.3s 0.2s linear;

		&:hover {
			background-size: 51% 3px;
			background-position: 0% 100%, 100% 100%;
			gap: 2rem;
		}
	}
`;

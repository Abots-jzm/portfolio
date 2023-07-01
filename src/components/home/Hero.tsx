import { styled } from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import PicturePNG from "../../assets/abots-pic.png";
import { motion } from "framer-motion";
import { letterVariants, nameVariants } from "../../variants";

const LINE_1 = "Oluwatobi";
const LINE_2 = "Abolarin S.";

function Hero() {
	return (
		<Container>
			<div>
				<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
					Hi, I'm
				</motion.div>
				<motion.div className="name" variants={nameVariants} initial="hidden" animate="visible">
					{LINE_1.split("").map((letter, i) => (
						<motion.span key={letter + "-" + i} variants={letterVariants}>
							{letter}
						</motion.span>
					))}
					<br />
					{LINE_2.split("").map((letter, i) => (
						<motion.span key={letter + "-" + i} variants={letterVariants}>
							{letter}
						</motion.span>
					))}
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 2, duration: 0.5 }}
				>
					a passionate front-end developer dedicated to crafting engaging and intuitive digital experiences. With a
					knack for clean code and an eye for detail, I bring life to designs and turn ideas into reality. Join me on
					this journey of innovation and creativity.
				</motion.div>
				<motion.button initial={{ opacity: 0, x: -200 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2.5 }}>
					<span>Let's connect</span>
					<motion.div
						className="icon"
						initial={{ x: 5 }}
						animate={{ x: 0 }}
						transition={{ repeat: Infinity, duration: 0.5, repeatType: "reverse", ease: "easeIn" }}
					>
						<BsArrowRight />
					</motion.div>
				</motion.button>
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

	@media (max-width: 768px) {
		flex-direction: column;
		gap: 7rem;
	}

	& > div {
		flex: 1;
	}

	.name {
		margin: 2rem 0;
		font-size: 4.8rem;
		font-weight: 700;
		background-image: var(--color-gradient-purple);
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
		gap: 1rem;

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

		.icon {
			display: grid;
			place-items: center;
		}
	}
`;

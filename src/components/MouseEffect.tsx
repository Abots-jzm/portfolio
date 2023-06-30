import { useEffect, useState } from "react";
import { styled } from "styled-components";
import useScreenSize from "../hooks/useScreenSize";

function MouseEffect() {
	const { screenHeight, screenWidth } = useScreenSize();
	const [cursorXY, setCursorXY] = useState({ x: -screenWidth, y: -screenHeight });

	useEffect(() => {
		const moveCursor = (e: MouseEvent) => {
			const x = e.clientX - screenWidth / 2;
			const y = e.clientY - screenHeight / 2;
			setCursorXY({ x, y });
		};

		window.addEventListener("mousemove", moveCursor);
		return () => {
			window.removeEventListener("mousemove", moveCursor);
		};
	}, [screenHeight, screenWidth]);

	return <Container cursorXY={cursorXY} />;
}

export default MouseEffect;

type ContainerProps = {
	cursorXY: { x: number; y: number };
};

const Container = styled.div.attrs<ContainerProps>((props: ContainerProps) => ({
	style: {
		transform: `translate3d(${props.cursorXY.x}px, ${props.cursorXY.y}px, 0)`,
	},
}))`
	position: fixed;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	background: radial-gradient(circle closest-side, #d9bfff08, transparent);
	z-index: -100000;
`;

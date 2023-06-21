// import { RuleSet, css, keyframes, styled } from "styled-components";

// type Props = {
// 	planerX: number;
// 	planerY: number;
// 	pointSize: number;
// 	spacing: number;
// };

// function HeroAnimation({ planerX, planerY, pointSize, spacing }: Props) {
// 	function makeGrid(xMax: number, yMax: number) {
// 		let grid = {};
// 		for (let i = 1; i <= xMax; i++) {
// 			let row = {};

// 			for (let j = 1; j <= yMax; j++) {
// 				row = { ...row, [j]: false };
// 			}

// 			grid = { ...grid, [i]: row };
// 		}

// 		return grid;
// 	}

// 	function randoShuffle(list: any) {
// 		let listLength = list.length;

// 		while (listLength > 0) {
// 			const rand = Math.floor(Math.random() * listLength);
// 			const temp = list[rand];
// 			list[rand] = list[listLength - 1];
// 			list[listLength - 1] = temp;
// 			listLength--;
// 		}

// 		return list;
// 	}

// 	function setGrid(grid: any, val: { x: number; y: number }, x: number, y: number) {
// 		const row = { ...grid[x], [y]: val };
// 		return { ...grid, [x]: row };
// 	}

// 	function getValue(grid: any, x: number, y: number) {
// 		return grid[x][y];
// 	}

// 	function getDeepValue(grid: any, val: string, x: number, y: number) {
// 		return getValue(grid, x, y)[val];
// 	}

// 	let grid = makeGrid(planerX, planerY);

// 	const orderedList = [];

// 	for (let x = 0; x < planerX; x++) {
// 		for (let y = 0; y < planerX; y++) {
// 			grid = setGrid(grid, { x: (x - 1) * (spacing + pointSize), y: (y - 1) * spacing + pointSize }, x, y);
// 			orderedList.push([x, y]);
// 		}
// 	}

// 	const shuffledList = randoShuffle(orderedList);
// 	const shuffledListTwo = randoShuffle(orderedList);

// 	let remainingCss: RuleSet<object> = css``;

// 	for (let i = 0; i < orderedList.length; i++) {
// 		const thisX = orderedList[i][0];
// 		const thisY = orderedList[i][1];
// 		const randX = shuffledList[i][0];
// 		const randY = shuffledList[i][1];
// 		const altrandX = shuffledListTwo[i][0];
// 		const altrandY = shuffledListTwo[i][1];

// 		const red = thisX * 10 + 30;
// 		const blue = thisY * 10 + 30;

// 		const shunt = keyframes`
//       0%, 10% {
//         translate: ${getDeepValue(grid, "x", thisX, thisY)}px ${getDeepValue(grid, "y", altrandX, altrandY)}px;
//       }
//       30%, 40% {
//         translate: ${getDeepValue(grid, "x", randX, randY)}px ${getDeepValue(grid, "y", thisX, thisY)}px;
//       }
//       70%, 80% {
//         translate: ${getDeepValue(grid, "x", thisX, thisY)}px ${getDeepValue(grid, "y", randX, randY)}px;
//       }
//       95%, 100% {
//         translate: ${getDeepValue(grid, "x", altrandX, altrandY)}px ${getDeepValue(grid, "y", thisX, thisY)}px;
//       }
//     `;

// 		const shit = css`
// 			&:nth-child(${i + 1}) {
// 				translate: ${getDeepValue(grid, "x", thisX, thisY)}px ${getDeepValue(grid, "y", thisX, thisY)}px;
// 				background: rgba(${red}, 10, ${blue});
// 				box-shadow: 3px 3px rgba(${red}, 10, ${blue}, 0.5);
// 				animation: ${shunt} 8s ease infinite alternate;
// 			}
// 		`;

// 		remainingCss = remainingCss.concat(shit);
// 	}

// 	return (
// 		<GridContainer
// 			remainingCss={remainingCss}
// 			planerX={planerX}
// 			planerY={planerY}
// 			pointSize={pointSize}
// 			spacing={spacing}
// 		>
// 			{Array(planerX * planerY)
// 				.fill(0)
// 				.map((_, i) => (
// 					<div key={i} />
// 				))}
// 		</GridContainer>
// 	);
// }

// export default HeroAnimation;

// type GridProps = {
// 	planerX: number;
// 	planerY: number;
// 	pointSize: number;
// 	spacing: number;
// 	remainingCss: RuleSet<object>;
// };

// const GridContainer = styled.div<GridProps>`
// 	position: absolute;
// 	top: 0;
// 	left: 0;
// 	right: 0;
// 	bottom: 0;
// 	margin: auto;
// 	width: ${({ planerX, pointSize, spacing }) => (pointSize + spacing) * planerX - spacing}px;
// 	height: ${({ planerY, pointSize, spacing }) => (pointSize + spacing) * planerY - spacing}px;

// 	& > * {
// 		width: ${(props) => props.pointSize}px;
// 		height: ${(props) => props.pointSize}px;
// 		top: 0;
// 		left: 0;

// 		${(props) => props.remainingCss}
// 	}
// `;

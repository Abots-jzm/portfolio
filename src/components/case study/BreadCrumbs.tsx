import { BsChevronRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

type Props = {
	path?: string;
};

function BreadCrumbs({ path }: Props) {
	const navigate = useNavigate();

	return (
		<Container>
			<div onClick={() => navigate(-1)}>projects</div>
			<div className="icon">
				<BsChevronRight />
			</div>
			<div>{path}</div>
		</Container>
	);
}

export default BreadCrumbs;

const Container = styled.div`
	margin-top: 3rem;
	display: flex;
	gap: 0.5rem;
	align-items: center;
	color: #828282;

	& > div {
		cursor: pointer;

		&:first-child {
			transition: all 0.3s;

			&:hover {
				color: var(--color-purple-light);
			}
		}

		&:last-child {
			color: white;
		}
	}

	.icon {
		font-size: 1.2rem;
		display: grid;
		place-items: center;
		cursor: default;
	}
`;

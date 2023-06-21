import "./Animation.scss";

function Animation() {
	return (
		<div className="wrap">
			{Array(576)
				.fill(0)
				.map((_, i) => (
					<div key={i} />
				))}
		</div>
	);
}

export default Animation;

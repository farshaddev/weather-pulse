const BounceDots = () => {
	return (
		<>
			<span className="animate-bounce">.</span>
			<span
				className="animate-bounce"
				style={{ animationDelay: "100ms" }}
			>
				.
			</span>
			<span
				className="animate-bounce"
				style={{ animationDelay: "200ms" }}
			>
				.
			</span>
		</>
	);
};

export default BounceDots;

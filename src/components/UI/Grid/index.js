function Grid({ children }) {
	return (
		<div className={`grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8`}>
			{children}
		</div>
	);
}

export default Grid;

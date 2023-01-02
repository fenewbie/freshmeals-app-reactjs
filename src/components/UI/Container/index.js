function Container({ children }) {
	return (
		<div className="container xl:max-w-xl lg:max-w-lg md:max-w-md pt-28">
			{children}
		</div>
	);
}

export default Container;

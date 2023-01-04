function Container({ children }) {
	return (
		<div className="container xl:max-w-xl lg:max-w-lg md:max-w-md py-28">
			{children}
		</div>
	);
}

export default Container;

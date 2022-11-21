const CommonSection = ({ title, children }) => {
	return (
		<section className="bg-hero-image bg-cover bg-center bg-no-repeat h-96 px-0 py-28 ">
			<div>{children}</div>
			<div>
				<h2 className="text-white">{title}</h2>
			</div>
		</section>
	);
};

export default CommonSection;

// import Breadcrumbs from "../Breadcrumbs";

const CommonSection = ({ title, children }) => {
	return (
		<section className="relative bg-hero-image bg-cover bg-center bg-no-repeat h-96 px-0 pb-28  ">
			<div>{children}</div>
			<div className="container absolute top-[60%] left-[15%] flex flex-row mx-auto text-white mb-10 font-raj">
				<div>
					<p className="text-base uppercase text-[#80B500] mb-4 ml-3">
						Welcome to our company
					</p>
					<p className="text-6xl">{title}</p>
				</div>
			
			</div>
		</section>
	);
};

export default CommonSection;

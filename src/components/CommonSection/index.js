import Breadcrumbs from '../UI/Breadcrumbs';

const CommonSection = ({ title, children }) => {
	return (
		<section className="relative bg-hero-image bg-cover bg-center bg-no-repeat h-[450px] px-0 pb-28  ">
			<div>{children}</div>
			<div className="container absolute top-[50%] left-1/2 -translate-x-1/2 flex justify-between text-white mb-10 font-raj max-md:flex-col max-md:items-center">
				<div className="max-md:mb-4">
					<p className="lg:text-lg text-base uppercase text-[#80B500] md:mb-4 mb-2">
						Welcome to our company
					</p>
					<p className="lg:text-6xl md:text-5xl text-3xl md:text-left text-center capitalize">
						{title || '404 Page'}
					</p>
				</div>
				<Breadcrumbs />
			</div>
		</section>
	);
};

export default CommonSection;

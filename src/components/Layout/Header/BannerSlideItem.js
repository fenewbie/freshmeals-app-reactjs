const BannerSlideItem = ({ imgItem }) => {
	return (
		<>
			<img
				src={imgItem['image-slide']}
				className="block w-full h-full sm:object-cover md:object-cover object-none m-0"
				alt={imgItem.subtitle}
			/>
			<div className="absolute transition-colors delay-1000 bg bg-slate-900 bg-opacity-60 w-full h-full top-0 left-0 text-white">
				<div
					className={`absolute p-8 space-y-6 bottom-1/3 sm:w-full md:w-3/4 lg:w-2/3 xl:w-1/3 ${
						imgItem.id % 2 === 0
							? 'md:left-8 lg:left-8 xl:left-20'
							: 'md:right-8 lg:right-8  xl:right-20 text-right'
					}`}
				>
					<h6 className="font-bold text-lg">{imgItem.subtitle}</h6>
					<h1 className="font-bold text-4xl">{imgItem.title}</h1>
					<div
						className={`${
							imgItem.id % 2 === 0 ? 'border-l-2 pl-8' : 'border-r-2 pr-8'
						} border-opacity-30`}
					>
						<p>{imgItem.desc}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default BannerSlideItem;

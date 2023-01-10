import { useRouteLoaderData } from 'react-router-dom';

const FeatureFooter = () => {
	const { features } = useRouteLoaderData('root');
	return (
		<div className='relative px-4 sm:px-8 md:px-8 lg:px-8 xl:px-8 w-full before:z-0 before:contents-[""] before:w-full before:h-1/2 before:absolute before:left-0 before:bottom-0 before:bg-[#f7f5eb]'>
			<div
				className={`relative h-auto bg-white grid place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 shadow-lg shadow-gray-300 mx-auto rounded-3xl border border-gray-200`}
			>
				{features.map((item) => (
					<div
						className='relative w-full h-auto pt-10 px-8 pb-4 flex items-center justify-center space-x-4 before:absolute before:top-1/2 before:left-[-1px] before:-translate-y-1/2 before:contents-[""] before:h-1/2 before:w-[1px] before:bg-gray-200'
						key={item.id}
					>
						<div>
							<img src={item.imgUrl} alt={item.title} />
						</div>
						<div className="space-y-3 pb-4">
							<h4 className="font-bold">{item.title}</h4>
							<p>{item.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default FeatureFooter;

import BlogSlider from '@components/Blog/BlogSlider';
import Title from '@components/Title';
import Button from '@components/UI/Button';
import { useRouteLoaderData } from 'react-router-dom';

const Gallery = () => {
	const { galleries } = useRouteLoaderData('root');
	const { blogs } = useRouteLoaderData('root');
	return (
		<div>
			<Title title="Our Activities" />
			<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-8 gap-4">
				{galleries[0].images.map((item) => {
					return (
						<div className="h-72 w-full group overflow-hidden">
							<img
								src={item}
								alt="gallery"
								className="h-full w-full object-cover group-hover:scale-110 transition-all duration-[1s]"
							/>
						</div>
					);
				})}
			</div>
			<div className="text-center">
				<Button className="btn-animated mt-16 max-md:w-full">
					<span className="btn-animated-text">Load More</span>
				</Button>
			</div>
			{/* <div className="mt-16">
				<Title title="Leatest Blog" />
				<BlogSlider blogs={blogs} />
			</div> */}
		</div>
	);
};

export default Gallery;

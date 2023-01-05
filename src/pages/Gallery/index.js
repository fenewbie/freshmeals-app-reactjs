import BlogSlider from '@components/Blog/BlogSlider';
import Title from '@components/Title';
import Button from '@components/UI/Button';
import Container from '@components/UI/Container';
import TooltipCustom from '@components/UI/TooltipCustom';
import BlogLeatest from '@features/BlogScreen/BlogLeatest';
import { useRouteLoaderData } from 'react-router-dom';

const Gallery = () => {
	const { galleries } = useRouteLoaderData('root');
	return (
		<>
			<Container>
				<Title title="Our Activities" />
				<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-8 gap-4">
					{galleries[0].images.map((item, index) => {
						return (
							<div
								className="h-72 w-full group overflow-hidden"
								key={index}
							>
								<img
									src={item}
									alt="gallery"
									className="h-full w-full object-cover group-hover:scale-110 transition-all duration-[1s]"
								/>
							</div>
						);
					})}
				</div>
				<div className="mt-10 flex justify-center">
					<TooltipCustom content="Feature under development">
						<Button className="btn-animated max-md:w-full">
							<span className="btn-animated-text">Load More</span>
						</Button>
					</TooltipCustom>
				</div>
			</Container>
			<BlogLeatest />
		</>
	);
};

export default Gallery;

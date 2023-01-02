import BlogSlider from '@components/Blog/BlogSlider';
import Title from '@components/Title';
import Button from '@components/UI/Button';
import Container from '@components/UI/Container';
import BlogLeatest from '@features/BlogScreen/BlogLeatest';
import { useRouteLoaderData } from 'react-router-dom';

const Gallery = () => {
	const { galleries } = useRouteLoaderData('root');
	return (
		<>
			<Container>
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
			</Container>
			<BlogLeatest />
		</>
	);
};

export default Gallery;

import { useEffect, useState } from 'react';
import { useRouteLoaderData } from 'react-router-dom';

import Title from '@components/Title';
import Button from '@components/UI/Button';
import Loader from '@components/UI/Loader';
import BlogLeatest from '@features/BlogScreen/BlogLeatest';

const Gallery = () => {
	const { galleries } = useRouteLoaderData('root');
	const [listToShow, setListToShow] = useState([]);
	const [visible, setVisible] = useState(6);

	useEffect(() => {
		setListToShow([]);
		const list = [...galleries[0].images].splice(0, visible);
		setListToShow(list);
	}, [galleries, visible]);

	const handleClick = () => {
		setVisible(visible + 3);
	};
	return (
		<>
			<div className="container pt-28">
				<Title title="Our Activities" />
				<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-8 gap-4">
					{listToShow.length > 0 ? (
						listToShow.map((item, index) => {
							return (
								<div
									className="h-72 w-full group overflow-hidden"
									key={index}
								>
									<img
										src={item}
										alt="gallery"
										className="h-full w-full object-cover group-hover:scale-125 transition-all duration-[1s]"
									/>
								</div>
							);
						})
					) : (
						<Loader />
					)}
				</div>
				<div className="text-center">
					{galleries[0].images.length > listToShow.length && (
						<Button
							className="btn-animated mt-16 max-md:w-full"
							onClick={handleClick}
						>
							<span className="btn-animated-text">Load More</span>
						</Button>
					)}
				</div>
			</div>
			<BlogLeatest />
		</>
	);
};

export default Gallery;

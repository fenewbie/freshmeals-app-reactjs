import { useEffect, useState } from 'react';
import { useRouteLoaderData } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';

import { BlogCard } from '@components/Blog/index';
import Title from '@components/Title';
import Slider from '@components/UI/Slider';
import ProductItem from '@features/ProductScreen/ProductItem/index';

function RelatedList({ col, related, type }) {
	const dataRoot = useRouteLoaderData('root');
	const [docs, setDocs] = useState([]);
	useEffect(() => {
		const resultArr1 = dataRoot[col].filter((item) => {
			const resultArr2 = item[type].filter((type) =>
				related.includes(type)
			);
			return resultArr2.length > 0;
		});
		setDocs(resultArr1);
	}, []);
	return (
		<div className="py-24">
			<Title
				title="Related Product"
				center={false}
			/>
			{docs.length > 0 && (
				<Slider
					breakpoints={{
						768: {
							slidesPerView: 2,
						},
						1024: {
							slidesPerView: 2,
						},
					}}
					grid={{ rows: 1, fill: 'row' }}
					loop={docs.length > 2}
				>
					{docs.map((el) => (
						<SwiperSlide key={el.id}>
							{
								(type = 'blog' ? (
									<BlogCard
										key={el.id}
										id={el.id}
										title={el.title}
										description={el.description}
										tags={el.tags}
										img={el.image}
									/>
								) : (
									<ProductItem
										id={el.id}
										rating={el.rating}
										numReviews={el.reviews}
										image={el.image}
										label={el.label || 'free'}
										title={el.title}
										price={el.price}
										discount={el.discount || 0}
										card
									/>
								))
							}
						</SwiperSlide>
					))}
				</Slider>
			)}
		</div>
	);
}

export default RelatedList;

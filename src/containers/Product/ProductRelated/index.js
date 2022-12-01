import { type } from '@testing-library/user-event/dist/type';
import { useEffect, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import Slider from '../../../components/UI/Slider';
import ProductItem from '../ProductItem';
import useFirestore from '../../../hooks/useFirestore';
import Title from '../../../components/Title';
function ProductRelated({ types }) {
	const { docs } = useFirestore('products');

	return (
		<div className="py-24">
			<Title title='Related Product' center={false}/>
			<Slider
				breakpoints={{
					768: {
						slidesPerView: 2,
					},
					1024: {
						slidesPerView: 4,
					},
				}}
				grid={{ rows: 1, fill: 'row' }}
				loop={true}
			>
				{docs
					.filter((product) => {
						const filterCategories = product.category.filter(
							(item) => types.includes(item)
						);
						return filterCategories.length > 0;
					})
					.flat()
					.map((el) => {
						return (
							<SwiperSlide key={el.id}>
								<ProductItem
									id={el.id}
									rating={el.rating}
									numReviews={el.reviews}
									image={el.image}
									label={el.label || 'free'}
									title={el.title}
									price={el.price}
									discount={el.discount || 0}
								/>
							</SwiperSlide>
						);
					})}
			</Slider>
		</div>
	);
}

export default ProductRelated;

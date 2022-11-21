import { useState } from 'react';
import useFirestore from '../../../hooks/useFirestore';

import {SwiperSlide} from 'swiper/react';


import ProductCard from '../../../components/ProductCard';
import Tabs from '../../../components/UI/Tabs/Tabs';
import Slider from '../../../components/UI/Slider/Slider';

const OurProducts = () => {
	const { docs } = useFirestore('products');

	const categories = [
		{label: 'food & drinks', products: docs.filter((item) => item.category.includes('food') || item.category.includes('drink'))},
		{label:  'vegetables',products: docs.filter((item) => item.category.includes('vegetables'))},
		{label: 'dried foods',products: docs.filter((item) => item.category.includes('dried food'))},
		{label: 'bread & cake',products: docs.filter((item) => item.category.includes('bread') || item.category.includes('cake'))},
		{label: 'fish & meat',products: docs.filter((item) => item.category.includes('fish') || item.category.includes('meat'))},
		{label: 'fruits',products: docs.filter((item) => item.category.includes('fruits'))}
	];

	return (
		categories.length > 0 && 
			<Tabs>
				{categories.map((item) => (
					<div label={item.label} key={item.label}>
						<Slider 
							breakpoints={{
								768: {
									slidesPerView: 2,
								},
								1024: {
									slidesPerView: 4,
								},
							}}
							grid={{rows:2, fill: 'row'}}
							loop={false}
						>
							{
								item.products.map(product => 
									<SwiperSlide key={product.id}>
										<ProductCard 
											image={product.image}
											label={product.label || 'free'}
											title={product.title}
											price={product.price}
											discount={product.discount || 0}
										/>
									</SwiperSlide>
								)
							}
						</Slider>
					</div>
				))}
			</Tabs>
	);
};

export default OurProducts;

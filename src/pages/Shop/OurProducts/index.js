import useFirestore from '../../../hooks/useFirestore';

import { SwiperSlide } from 'swiper/react';

import ProductCard from '../../../components/ProductCard';
import Tabs from '../../../components/UI/Tabs/Tabs';
import Slider from '../../../components/UI/Slider/Slider';
import { useState } from 'react';
import QuickViewProduct from '../../../containers/QuickViewProduct';

const OurProducts = () => {
	const [isModalShowing, setIsModalShowing] = useState(false);
	const { docs } = useFirestore('products');

	const categories = [
		{
			label: 'food & drinks',
			products: docs.filter(
				(item) =>
					item.category.includes('food') || item.category.includes('drink')
			),
		},
		{
			label: 'vegetables',
			products: docs.filter((item) => item.category.includes('vegetables')),
		},
		{
			label: 'dried foods',
			products: docs.filter((item) => item.category.includes('dried food')),
		},
		{
			label: 'bread & cake',
			products: docs.filter(
				(item) =>
					item.category.includes('bread') || item.category.includes('cake')
			),
		},
		{
			label: 'fish & meat',
			products: docs.filter(
				(item) =>
					item.category.includes('fish') || item.category.includes('meat')
			),
		},
		{
			label: 'fruits',
			products: docs.filter((item) => item.category.includes('fruits')),
		},
	];

	return (
		categories.length > 0 && (
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
						>
							{item.products.map((product) => (
								<SwiperSlide key={product.id}>
									<ProductCard
										image={product.image}
										label={product.label || 'free'}
										title={product.title}
										price={product.price}
										discount={product.discount || 0}
										setIsModalShowing={setIsModalShowing}
									/>
								</SwiperSlide>
							))}
						</Slider>
						{isModalShowing ? (
							<QuickViewProduct setIsModalShowing={setIsModalShowing} data = {docs} />
						) : null}
					</div>
				))}
			</Tabs>
		)
	);
};

export default OurProducts;

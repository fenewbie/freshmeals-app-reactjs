import { SwiperSlide } from 'swiper/react';
import { useState } from 'react';

import useFirestore from '../../../hooks/useFirestore';

import ProductItem from '../ProductItem';
import Tabs from '../../../components/UI/Tabs/Tabs';
import Slider from '../../../components/UI/Slider/Slider';
import QuickViewProductModal from '../QuickViewProductModal';

const ProductList = () => {
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
					<div
						label={item.label}
						key={item.label}
					>
						<Slider
							breakpoints={{
								768: {
									slidesPerView: 2,
								},
								1024: {
									slidesPerView: 4,
								},
							}}
							grid={{ rows: 2, fill: 'row' }}
							loop={false}
						>
							{item.products.map((product) => (
								<SwiperSlide key={product.id}>
									<ProductItem
										rating={product.rating}
										numReviews={product.numReviews}
										image={product.image}
										label={product.label || 'free'}
										title={product.title}
										price={product.price}
										discount={product.discount || 0}
										handleClick={() =>
											setIsModalShowing(!isModalShowing)
										}
									/>
								</SwiperSlide>
							))}
						</Slider>
						{isModalShowing ? (
							<QuickViewProductModal
								handleClose={() =>
									setIsModalShowing(isModalShowing)
								}
								docs={categories}
								isOpen={isModalShowing}
							/>
						) : null}
					</div>
				))}
			</Tabs>
		)
	);
};

export default ProductList;

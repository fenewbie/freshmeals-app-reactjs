import Tabs from './Tabs';
import SwiperProduct from './SwiperProducts';
import { Swiper, SwiperSlide } from 'swiper/react';
import useFirestore from '../../../hooks/useFirestore';
import ProductCard from '../../Product';

const Test = () => {
	const { docs } = useFirestore('products');
	console.log('docs', docs);
	const filterProducts = docs.filter((item) => item.category === 'fruits');
	console.log('filterProducts', filterProducts);

	return (
		<Tabs>
			{filterProducts.map((item) => (
				<span key={item.id}>
					<SwiperProduct>
						<SwiperSlide className="min-h-[200px]">
							<ProductCard />
						</SwiperSlide>
					</SwiperProduct>
				</span>
			))}
		</Tabs>
	);
};

export default Test;

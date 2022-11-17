import Tabs from './Tabs';
import SwiperProduct from './SwiperProducts';
import { Swiper, SwiperSlide } from 'swiper/react';
import useFirestore from '../../../hooks/useFirestore';
import ProductCard from '../../Product';

const Test = () => {
	const { docs } = useFirestore('products');
	console.log('docs', docs);
	let filterProducts = docs.filter((item) => item.category === 'fruits');
    const categories = [{label: 'fruits', content: filterProducts}];
	// console.log('filterProducts', filterProducts);

	return (
		<Tabs>
			{categories.map((item) => (
				<span key={item.id} label={item.label}>
					<SwiperProduct>
                        {
                            item.content.map(product => 
                                <SwiperSlide className="min-h-[200px]">
                                    <ProductCard image={product.image} label={product.label} title={product.title}/>
						        </SwiperSlide>
                            )
                        }
						
					</SwiperProduct>
				</span>
			))}
		</Tabs>
	);
};

export default Test;

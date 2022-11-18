import { useState } from 'react';
import useFirestore from '../../../hooks/useFirestore';

import {Swiper,SwiperSlide} from 'swiper/react';
import { Pagination, Navigation, Keyboard } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";

import ProductCard from '../../../components/Product';
import Tabs from '../../../components/UI/Tabs/Tabs';
import SliderButton from '../../../components/UI/Slider/SliderButton';


const OurProducts = () => {
	const { docs } = useFirestore('products');
	let [toggleBtn, setToggleBtn] = useState(false);
	// console.log('docs of products', docs);

	const categories = [
		{label: 'food & drinks', products: docs.filter((item) => item.category.includes('food') || item.category.includes('drink'))},
		{label:  'vegetables',products: docs.filter((item) => item.category.includes('vegetables'))},
		{label: 'dried foods',products: docs.filter((item) => item.category.includes('dried food'))},
		{label: 'bread & cake',products: docs.filter((item) => item.category.includes('bread') || item.category.includes('cake'))},
		{label: 'fish & meat',products: docs.filter((item) => item.category.includes('fish') || item.category.includes('meat'))}
	];

	return (
			<div
				className="my-20"
				onMouseEnter={() => {
					setToggleBtn(true);
				}}
				onMouseLeave={() => {
					setToggleBtn(false);
				}}
			>
				{
					categories.length > 0 && 
						<Tabs>
							{categories.map((item) => (
								<div label={item.label} key={item.label}>
									<Swiper 
										slidesPerView={1}
										spaceBetween={30}
										loop={true}
										pagination={true} 
										keyboard={{
											enabled: true,
										}}
										modules={[Pagination, Navigation, Keyboard]}
										breakpoints={
											{
												768: {
													slidesPerView: 3,
													pagination: false
												},
												1024: {
													slidesPerView: 4,
													pagination: false
												}
											}
										}
										className="mySwiper"
									>	

										<SliderButton
											isNext={false}
											iconSize={30}
											iconColors={['white', '#80B500']}
											className={`p-2 bg-white rounded-full border-gray-200 border-2 hover:bg-greenBtn ${
												toggleBtn
													? 'visible translate-x-[0%] opacity-100'
													: 'invisible -translate-x-[30%] opacity-0'
											} shadow-2xl transition-all ease-in-out duration-300 lg:block hidden focus:outline focus:outline-2 focus:outline-greenBtn`}
											iconClassName={`transition-all ease-in-out duration-300`}
										/>
										<SliderButton
											isNext={true}
											iconSize={30}
											iconColors={['white', '#80B500']}
											className={`p-2 bg-white rounded-full border-gray-200 border-2 hover:bg-greenBtn ${
												toggleBtn
													? 'visible translate-x-[0%] opacity-100'
													: 'invisible translate-x-[30%] opacity-0'
											} shadow-2xl transition-all ease-in-out duration-300 lg:block hidden  focus:outline focus:outline-2 focus:outline-greenBtn`}
											iconClassName={`transition-all ease-in-out duration-300`}
										/>
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
									</Swiper>
								</div>
							))}
						</Tabs>
				}
			</div>

		
		
	);
};

export default OurProducts;

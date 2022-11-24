import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import { Keyboard } from 'swiper';


import { useState } from 'react';
import SliderButton from '../../../components/UI/Slider/SliderButton';

function ProductListImages({ images }) {
	return (
		<div>
			<Swiper
				slidesPerView={4}
				spaceBetween={10}
				loop={true}
				keyboard={{ enabled: true }}
				modules={[Keyboard]}
				className="mySwiper"
			>
				{images.length > 4 && (
					<>
						<SliderButton
							iconSize={20}
							iconColors={['#80B500', 'black']}
							className="p-1 bg-transparent rounded border-gray-400 border-2 visible opacity-100 transition-all ease-in-out duration-300 lg:block hidden top-full -translate-y-full translate-x-0 "
							iconClassName={`transition-all ease-in-out duration-300`}
						/>
						<SliderButton
							isNext
							iconSize={20}
							iconColors={['#80B500', 'black']}
							className="p-1 bg-transparent rounded border-gray-400 border-2 visible opacity-100 transition-all ease-in-out duration-300 lg:block hidden top-full -translate-y-full translate-x-0  left-[15%] right-[unset]"
							iconClassName={`transition-all ease-in-out duration-300`}
						/>
					</>
				)}
				{images &&
					images.map((imgSrc, index) => (
						<SwiperSlide key={index}>
							<img
								src={imgSrc}
								className="h-[90px] object-contain mb-12"
								alt="product-item"
							/>
						</SwiperSlide>
					))}
			</Swiper>
			{/* <div className="flex">
			</div>
			<div>
				<button>Left</button>
				<button>Right</button>
			</div> */}
		</div>
	);
}

export default ProductListImages;

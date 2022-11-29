import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Thumbs, Keyboard } from 'swiper';

import SliderButton from '../../../components/UI/Slider/SliderButton';
import { useState, useRef } from 'react';

function ProductListImages({ images }) {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const [realIndex, setRealIndex] = useState(0);
	
	return (
		<div className="flex-col">
			<div className="mb-5">
				<Swiper
					loop={true}
					thumbs={{
						swiper:
							thumbsSwiper && !thumbsSwiper.destroyed
								? thumbsSwiper
								: null,
					}}
					modules={[Keyboard, Thumbs]}
					onSlideChange={(e) => setRealIndex(e.realIndex)}
					className="mySwiper2"
				>
					{images.map((image, index) => (
						<SwiperSlide key={index}>
							<div className="h-96 w-96 bg-[#f9f9f9] p-2 mx-auto rounded">
								<img
									src={image}
									className="h-full object-contain mx-auto"
									alt="product-item"
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			<Swiper
				onSwiper={setThumbsSwiper}
				slidesPerView={4}
				spaceBetween={10}
				keyboard={{ enabled: true }}
				modules={[Keyboard, Thumbs]}
				className="mySwiper"
			>
				{images.map((image, index) => (
					<SwiperSlide key={index}>
						<div
							className={`h-20 bg-[#F9F9F9] py-2 border ${
								index == realIndex && 'border-greenBtn'
							}`}
						>
							<img
								src={image}
								className="h-full object-contain mb-12 mx-auto"
								alt="product-item"
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default ProductListImages;

import { useState} from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Thumbs, Keyboard, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import SliderButton from '@components/UI/Slider/SliderButton';

function ProductListImages({ images }) {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const [realIndex, setRealIndex] = useState();
	return (
		<div className="flex-col">
			<div>
				<Swiper
					thumbs={{
						swiper:
							thumbsSwiper && !thumbsSwiper.destroyed
								? thumbsSwiper
								: null,
					}}
					loop={true}
					effect={'fade'}
					keyboard={true}
					modules={[EffectFade, Thumbs, Keyboard]}
					onSlideChange={(e) => setRealIndex(e.realIndex)}
					onInit={(e) => setRealIndex(e.realIndex)}
					className="swiper2"
				>
					{images?.map((image, index) => (
						<SwiperSlide key={index}>
							<div className="md:h-96 h-80 bg-[#ffffff] p-2 mx-auto rounded mb-10 cursor-pointer">
								<img
									src={image}
									className="h-full object-contain mx-auto"
									alt="product-item"
								/>
							</div>
						</SwiperSlide>
					))}

					{images?.length > 1 && (
						<div>
							<SliderButton
								iconSize={20}
								iconColors={['white', '#80B500']}
								className="p-1 bg-transparent rounded border-greenBtn border-2 visible opacity-100 transition-all ease-in-out duration-300 top-full -translate-y-full translate-x-0   hover:bg-greenBtn left-0"
								iconClassName={`transition-all ease-in-out duration-300`}
							/>
							<SliderButton
								isNext
								iconSize={20}
								iconColors={['white', '#80B500']}
								className="p-1 bg-transparent rounded border-greenBtn border-2 visible opacity-100 transition-all ease-in-out duration-300 top-full -translate-y-full translate-x-0  left-16 right-[unset] hover:bg-greenBtn"
								iconClassName={`transition-all ease-in-out duration-300`}
							/>
						</div>
					)}
				</Swiper>
			</div>

			<div >
				<Swiper
					onSwiper={setThumbsSwiper}
					slidesPerView={3}
					spaceBetween={10}
					modules={[Thumbs]}
					breakpoints={{
						768: {
							slidesPerView: 4,
						},
						1024: {
							slidesPerView: 4,
						},
					}}
					className="swiper1"
				>
					{images?.map((image, index) => (
						<SwiperSlide key={index}>
							<div
								className={`md:h-20 md:w-20 h-24 mx-auto bg-[#F9F9F9] py-2 border ${
									index === realIndex && 'border-greenBtn'
								} mt-5`}
							>
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
		</div>
	);
}

export default ProductListImages;

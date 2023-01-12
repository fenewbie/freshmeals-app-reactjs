import { memo, useState } from 'react';

import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import 'swiper/css/effect-fade';
import { Keyboard, Grid, EffectFade, Pagination } from 'swiper';

import SliderButton from './SliderButton';
import SliderPagination from './SliderPagination';

function Slider({ children, hasPagination = true, ...swiperProps }) {
	const [showSliderBtn, setShowSliderBtn] = useState(false);
	const [indexAct, setIndexAct] = useState(0);

	let totalSlides = children?.length;
	const row = swiperProps.grid ? swiperProps.grid.rows : 1;
	const slidesPerView = swiperProps.slidesPerView
		? swiperProps.slidesPerView
		: 1;

	if (row === 1 && !swiperProps.loop && slidesPerView !== 1) {
		totalSlides = totalSlides - 1;
	} else if (row !== 1) {
		totalSlides = Math.round((totalSlides - slidesPerView) / row);
	}

	return (
		<div
			onMouseEnter={() => {
				setShowSliderBtn(true);
			}}
			onMouseLeave={() => {
				setShowSliderBtn(false);
			}}
		>
			<Swiper
				spaceBetween={30}
				loop={true}
				keyboard={{
					enabled: true,
				}}
				modules={[Keyboard, Grid, EffectFade, Pagination]}
				onSlideChange={(e) => setIndexAct(e.realIndex)}
				{...swiperProps}
				className="mySwiper"
			>
				<SliderButton
					isNext={false}
					iconSize={30}
					iconColors={['white', '#80B500']}
					className={`p-2 bg-white rounded-full border-gray-200 border-2 hover:bg-greenBtn ${
						showSliderBtn
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
						showSliderBtn
							? 'visible translate-x-[0%] opacity-100'
							: 'invisible translate-x-[30%] opacity-0'
					} shadow-2xl transition-all ease-in-out duration-300 lg:block hidden  focus:outline focus:outline-2 focus:outline-greenBtn`}
					iconClassName={`transition-all ease-in-out duration-300`}
				/>
				{totalSlides > 1 && hasPagination && (
					<SliderPagination
						totalSlides={totalSlides}
						indexAct={indexAct}
					/>
				)}

				{children}
			</Swiper>
		</div>
	);
}

export default memo(Slider);

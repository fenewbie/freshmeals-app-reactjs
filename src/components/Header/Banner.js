import { SwiperSlide, Swiper } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import BannerSlideItem from './BannerSlideItem';
import SliderButton from '../UI/Slider/SliderButton';
import useFirestore from '../../hooks/useFirestore';
import { useState } from 'react';
import SliderPagination from '../UI/Slider/SliderPagination';

const Banner = () => {
	const [showNavBtn, setShowNavBtn] = useState(false);
	const [realIndex, setRealIndex] = useState(0);
	const { docs } = useFirestore('slide-header');
	return (
		<div
			className="relative w-full h-[600px] md:h-[700px] lg:h-screen flex justify-center"
			onMouseEnter={() => {
				setShowNavBtn(true);
			}}
			onMouseLeave={() => {
				setShowNavBtn(false);
			}}
		>
			{docs.length > 0 && (
				<Swiper
					loop={true}
					onSlideChange={(e) => setRealIndex(e.realIndex)}
				>
					<SliderButton
						isNext={false}
						iconSize={36}
						iconColors={['white', '#80B500']}
						className={`p-3 bg-transparent rounded border-gray-400 border-2 hover:border-white hover:bg-greenBtn ${
							showNavBtn
								? 'visible translate-x-[0%] opacity-100'
								: 'invisible translate-x-[30%] opacity-0'
						} transition-all ease-in-out duration-300 lg:block hidden`}
						iconClassName={`transition-all ease-in-out duration-300`}
					/>
					<SliderButton
						isNext={true}
						iconSize={36}
						iconColors={['white', '#80B500']}
						className={`p-3 bg-transparent rounded border-gray-400 border-2 hover:border-white hover:bg-greenBtn ${
							showNavBtn
								? 'visible translate-x-[0%] opacity-100'
								: 'invisible -translate-x-[30%] opacity-0'
						} transition-all ease-in-out duration-300 lg:block hidden`}
						iconClassName={`transition-all ease-in-out duration-300`}
					/>
					{docs.map((imgItem, index) => (
						<SwiperSlide key={imgItem.id}>
							<BannerSlideItem
								imgItem={imgItem}
								isActive={realIndex === index}
							/>
						</SwiperSlide>
					))}
					<SliderPagination totalSlides={docs.length} indexAct={realIndex} isBanner/>
				</Swiper>
			)}
		</div>
	);
};

export default Banner;

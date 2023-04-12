import { useRef, useState } from 'react';
import { useRouteLoaderData } from 'react-router-dom';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import BannerSlideItem from './BannerSlideItem';
import SliderButton from '@components/UI/Slider/SliderButton';
import SliderPagination from '@components/UI/Slider/SliderPagination';
import { useOnHoverOutside } from '@hooks/useOnHoverOutside';

const Banner = () => {
	const [showArrowBtn, setShowArrowBtn] = useState(false);
	const [realIndex, setRealIndex] = useState(0);
	const { slideHeader } = useRouteLoaderData('root');

	const arrowBtnRef = useRef();
	const closeHoverArrowBtn = () => {
		setShowArrowBtn(false);
	};
	useOnHoverOutside(arrowBtnRef, closeHoverArrowBtn);
	return (
		<div
			className="relative h-[550px] w-full md:h-[550px] lg:h-[590px] flex justify-center"
			onMouseOver={() => setShowArrowBtn(true)}
			ref={arrowBtnRef}
		>
			{slideHeader.length > 0 && (
				<Swiper loop={true} onSlideChange={(e) => setRealIndex(e.realIndex)}>
					<SliderButton
						isNext={false}
						iconSize={36}
						iconColors={['white', '#80B500']}
						className={`p-3 bg-transparent rounded border-gray-400 border-2 hover:border-white hover:bg-greenBtn ${
							showArrowBtn
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
							showArrowBtn
								? 'visible translate-x-[0%] opacity-100'
								: 'invisible -translate-x-[30%] opacity-0'
						} transition-all ease-in-out duration-300 lg:block hidden`}
						iconClassName={`transition-all ease-in-out duration-300`}
					/>
					{slideHeader.map((imgItem, index) => (
						<SwiperSlide key={imgItem.id}>
							<BannerSlideItem
								imgItem={imgItem}
								isActive={realIndex === index}
							/>
						</SwiperSlide>
					))}
					<SliderPagination
						totalSlides={slideHeader.length}
						indexAct={realIndex}
						isBanner
					/>
				</Swiper>
			)}
		</div>
	);
};

export default Banner;

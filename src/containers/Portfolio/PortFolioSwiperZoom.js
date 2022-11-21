import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade, Navigation, Keyboard } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import SliderButton from '../../components/UI/Slider/SliderButton';
import { memo } from 'react';

const PortSwiperZoom = ({ loopSlide, indexAct, children }) => {
	return (
		<div className="bg-transparent">
			<div>
				{
					<Swiper
						slidesPerView={loopSlide}
						loop={true}
						centeredSlides={true}
						effect="fade"
						keyboard={{
							enabled: true,
						}}
						modules={[EffectFade, Navigation, Pagination, Keyboard]}
						pagination={{
							type: 'fraction',
							renderFraction: function (currentClass, totalClass) {
								return (
									'<span class="' +
									currentClass +
									'"></span>' +
									' of ' +
									'<span class="' +
									totalClass +
									'"></span>'
								);
							},
						}}
						onInit={(e) => {
							e.slideTo(indexAct);
						}}
						className="mySwiper"
					>
						<SliderButton
							isNext={false}
							iconSize={30}
							iconColors={['white', '#80B500']}
							className={`p-2 bg-transparent max-md:bg-white rounded-full border-[#ccc] border-2 translate-x-[0%] shadow-2xl transition-all ease-in-out duration-300 hover:bg-greenBtn opacity-80 hover:opacity-100`}
							iconClassName={`transition-all ease-in-out duration-300`}
						/>

						<SliderButton
							isNext={true}
							iconSize={30}
							iconColors={['white', '#80B500']}
							className={`p-2 bg-transparent max-md:bg-white rounded-full border-[#ccc] border-2 translate-x-[0%] shadow-2xl transition-all ease-in-out duration-300 hover:bg-greenBtn opacity-80 hover:opacity-100`}
							iconClassName={`transition-all ease-in-out duration-300`}
						/>

						{children}
					</Swiper>
				}
			</div>
		</div>
	);
};

export default memo(PortSwiperZoom);

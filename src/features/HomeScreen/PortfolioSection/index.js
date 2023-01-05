import { useState, useCallback } from 'react';
import { useRouteLoaderData } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Title from '@components/Title';
import Backdrop from '@components/UI/Modal/BackDrop';
import Slider from '@components/UI/Slider';

const PortfolioSection = () => {
	const [indexAct, setIndexAct] = useState();
	const [loopSlide, setLoopSlide] = useState();

	const { portfolio } = useRouteLoaderData('root');
	const handleUnmount = useCallback((e) => {
		const img = e.target.closest('img');
		!img && setIndexAct();
	}, []);

	return (
		<div className="bg-[#F7F5EB] pb-24 pt-20 text-center font-raj max-md:px-4">
			<Title title="We Have Done" subtitle="Portfolio" />
			{portfolio.length > 0 && (
				<Slider
					centeredSlides
					breakpoints={{
						768: {
							slidesPerView: 2,
						},
						1024: {
							slidesPerView: 3.5,
						},
					}}
					onClick={(e) => {
						setIndexAct(e.clickedIndex);
					}}
					onResize={(e) => {
						setLoopSlide(e.loopedSlides);
					}}
				>
					{portfolio.map((imgItem) => (
						<SwiperSlide key={imgItem.id}>
							<div className="overflow-hidden rounded-md">
								<div className="h-full w-full hover:scale-[1.3] transition-all duration-300 ease-linear">
									<img
										alt="portfolio"
										src={imgItem.img}
										className="h-full w-full object-contain"
									/>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Slider>
			)}
			{indexAct && (
				<Backdrop handleUnmount={() => setIndexAct()}>
					<Slider
						slidesPerView={loopSlide}
						centeredSlides={true}
						effect="fade"
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
					>
						{portfolio.map((imgItem) => (
							<SwiperSlide key={imgItem.id} onClick={handleUnmount}>
								<div className="overflow-hidden rounded-md relative lg:pt-[30%] pt-[50%] w-full md:w-1/2 bg-transparent mx-auto">
									<div className="absolute top-0 left-0 h-full w-full ">
										<img
											alt="portfolio"
											src={imgItem.img}
											className="h-full w-full object-contain"
										/>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Slider>
				</Backdrop>
			)}
		</div>
	);
};

export default PortfolioSection;

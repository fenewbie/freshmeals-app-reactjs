import { useState, useCallback } from 'react';

import { SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Title from '../../components/UI/Title';
import Backdrop from './BackDrop';
import PortSwiperZoom from './PortFolioSwiperZoom';
import useFirestore from '../../hooks/useFirestore';
import Slider from '../../components/UI/Slider/Slider';

const Portfolio = () => {
	const [indexAct, setIndexAct] = useState();
	const [loopSlide, setLoopSlide] = useState();
	
	const { docs } = useFirestore('portfolio');

	const handleUnmount = useCallback((e) => {
		const img = e.target.closest('img');
		!img && setIndexAct();
	}, []);

	return (
		<div className="bg-[#F7F5EB] py-[120px] text-center">
			<Title title="We Have Done" subtitle="Portfolio" />
			{
				docs.length > 0 && 
				<Slider
					centeredSlides
					breakpoints={{
						768: {
							slidesPerView: 2,
						},
						1024: {
							slidesPerView: 4,
						},
					}}
					onClick={(e) => {
						setIndexAct(e.clickedIndex);
					}}
					onResize={(e) => {
							setLoopSlide(e.loopedSlides);
					}}
				>
					{
						docs.map((imgItem) => 
							<SwiperSlide key={imgItem.id}>
								<div className="overflow-hidden rounded-md my-10">
									<div className="h-full w-full hover:scale-[1.3] transition-all duration-300 ease-linear">
										<img
											alt="portfolio"
											src={imgItem.img}
											className="h-full w-full object-contain"
										/>
									</div>
								</div>
							</SwiperSlide>
						)
					}
				</Slider>
			}

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
						{docs.map((imgItem) => (
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

export default Portfolio;

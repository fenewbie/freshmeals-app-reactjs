import { useState, useCallback } from 'react';
import { useRouteLoaderData } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Title from '@components/Title';
import Slider from '@components/UI/Slider';
import Modal from '@components/UI/Modal';

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
			<Title
				title="We Have Done"
				subtitle="Portfolio"
			/>
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
				<Modal handleClose={() => setIndexAct()}>
					<div className="lg:w-[720px] md:w-[600px] w-[400px]">
						<Slider
							slidesPerView={loopSlide}
							centeredSlides={true}
							effect="fade"
							pagination={{
								type: 'fraction',
								renderFraction: function (
									currentClass,
									totalClass
								) {
									return (
										'<div class="text-white"><span class="' +
										currentClass +
										' "></span>' +
										' of ' +
										'<span class="' +
										totalClass +
										'"></span></div>'
									);
								},
							}}
							onInit={(e) => {
								e.slideTo(indexAct);
							}}
							hasPagination={false}
						>
							{portfolio.map((imgItem) => (
								<SwiperSlide
									key={imgItem.id}
									onClick={handleUnmount}
								>
									<div className="w-full md:h-[600px] h-[180px] bg-[#000000]">
										<img
											alt="portfolio"
											src={imgItem.img}
											className="h-full w-full object-cover"
										/>
									</div>
								</SwiperSlide>
							))}
						</Slider>
					</div>
				</Modal>
			)}
		</div>
	);
};

export default PortfolioSection;

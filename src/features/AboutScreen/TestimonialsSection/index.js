import {  useRouteLoaderData } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';

import Title from '@components/Title';
import Slider from '@components/UI/Slider';
import ClientCard from '@components/About/ClientCard';

function TestimonialsSection() {
	const { feedbacks } = useRouteLoaderData('root');
	return (
		<div className="py-[120px] bg-sectionBg max-md:px-4">
			<Title title="Clients Feedbacks" />
			<Slider
				centeredSlides
				breakpoints={{
					768: {
						slidesPerView: 1,
					},
					1024: {
						slidesPerView: 2.5,
					},
				}}
			>
				{feedbacks.map((item, index) => (
					<SwiperSlide key={index}>
						<ClientCard {...item} />
					</SwiperSlide>
				))}
			</Slider>
		</div>
	);
}

export default TestimonialsSection;

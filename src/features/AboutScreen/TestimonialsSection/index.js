import { useLoaderData } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';

import Title from '@components/Title';
import Slider from '@components/UI/Slider';
import ClientCard from '@components/About/ClientCard';

function TestimonialsSection() {
	const { feedbacks } = useLoaderData();
	return (
		<div className="py-[120px] px-4 bg-sectionBg">
			<Title title="Clients Feedbacks" />
			<Slider
				breakpoints={{
					768: {
						slidesPerView: 1,
					},
					1024: {
						slidesPerView: 2,
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

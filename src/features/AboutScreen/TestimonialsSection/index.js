import { useRouteLoaderData } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';

import Title from '@components/Title';
import Slider from '@components/UI/Slider';
import ClientCard from '@components/About/ClientCard';

function TestimonialsSection() {
	const { feedbacks } = useRouteLoaderData('root');
	return (
		<div className="py-28 bg-sectionBg">
			<div className="container">
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
					loop={true}
				>
					{feedbacks.map((item, index) => (
						<SwiperSlide key={index}>
							<ClientCard {...item} />
						</SwiperSlide>
					))}
				</Slider>
			</div>
		</div>
	);
}

export default TestimonialsSection;

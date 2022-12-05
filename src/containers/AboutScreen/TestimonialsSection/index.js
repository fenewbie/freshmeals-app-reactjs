import { SwiperSlide } from 'swiper/react';
import Title from '../../../components/Title';
import Slider from '../../../components/UI/Slider';
import ClientCard from './ClientCard';
import useFirestore from '../../../hooks/useFirestore';

function TestimonialsSection() {
	const { docs } = useFirestore('members/1/client-feedback');
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
				{docs.map((item, index) => (
					<SwiperSlide key={index}>
						<ClientCard
							avatar={item.image}
							name={item.name}
							job={item.job}
							desc={item.desc}
						/>
					</SwiperSlide>
				))}
			</Slider>
		</div>
	);
}

export default TestimonialsSection;

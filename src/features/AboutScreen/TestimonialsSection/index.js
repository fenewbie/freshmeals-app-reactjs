import { SwiperSlide } from 'swiper/react';
import Title from '../../../components/Title';
import Slider from '../../../components/UI/Slider';
import { TiMessages } from 'react-icons/ti';
import Card from '../../../components/UI/Card';
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
						<Card className="relative flex max-md:flex-wrap items-center bg-white p-10 rounded shadow-card">
							<img
								src={item.avatar}
								alt="client"
								className="h-40 w-40 max-md:mr-auto object-contain mr-10"
							/>
							<div className="">
								<p className="mb-4 max-md:mt-6">{item.desc}</p>
								<h4 className="block text-xl font-bold ">{item.name}</h4>
								<span className="font-light">{item.job}</span>
							</div>
							<span className="absolute text-9xl bottom-2 right-6 opacity-[0.03]">
								<TiMessages />
							</span>
						</Card>
					</SwiperSlide>
				))}
			</Slider>
		</div>
	);
}

export default TestimonialsSection;

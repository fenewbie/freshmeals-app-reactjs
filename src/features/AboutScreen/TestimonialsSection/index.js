import { SwiperSlide } from 'swiper/react';
import Title from '@components/Title';
import Slider from '@components/UI/Slider';
import ClientCard from '@components/About/ClientCard';
import { useLoaderData } from '../../../../node_modules/react-router-dom/dist/index';

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
						{/* <Card className="relative flex max-md:flex-wrap items-center bg-white p-10 rounded shadow-card">
							<img
								src={item.image}
								alt="client"
								className="h-40 w-40 max-md:mr-auto object-contain mr-10"
							/>
							<div className="">
								<p className="mb-4 max-md:mt-6">{item.desc}</p>
								<h4 className="block text-xl font-bold ">
									{item.name}
								</h4>
								<span className="font-light">{item.job}</span>
							</div>
							<span className="absolute text-9xl bottom-2 right-6 opacity-[0.03]">
								<TiMessages />
							</span>
						</Card> */}
						<ClientCard name={item.name} desc={item.desc} job={item.job} avatar={item.image} />
					</SwiperSlide>
				))}
			</Slider>
		</div>
	);
}

export default TestimonialsSection;

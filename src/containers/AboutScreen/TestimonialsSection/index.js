import { SwiperSlide } from 'swiper/react';
import Title from '../../../components/Title';
import Slider from '../../../components/UI/Slider';
import ClientCard from './ClientCard';

function TestimonialsSection() {
	const fakeData = [
		{
			name: 'Client Name',
			desc: 'I have been a huge huge fan of FreshMeals since their inception into the market.',
			avatar: 'https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/testimonial/5.jpg',
			job: 'Senior Financial Advisor',
		},
		{
			name: 'Client Name',
			desc: 'I have been a huge huge fan of FreshMeals since their inception into the market.',
			avatar: 'https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/testimonial/5.jpg',
			job: 'Senior Financial Advisor',
		},
		{
			name: 'Client Name',
			desc: 'I have been a huge huge fan of FreshMeals since their inception into the market.',
			avatar: 'https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/testimonial/5.jpg',
			job: 'Senior Financial Advisor',
		},
		{
			name: 'Client Name',
			desc: 'I have been a huge huge fan of FreshMeals since their inception into the market.',
			avatar: 'https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/testimonial/5.jpg',
			job: 'Senior Financial Advisor',
		},
		{
			name: 'Client Name',
			desc: 'I have been a huge huge fan of FreshMeals since their inception into the market.',
			avatar: 'https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/testimonial/5.jpg',
			job: 'Senior Financial Advisor',
		},
		{
			name: 'Client Name',
			desc: 'I have been a huge huge fan of FreshMeals since their inception into the market.',
			avatar: 'https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/testimonial/5.jpg',
			job: 'Senior Financial Advisor',
		},
	];
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
				{fakeData.map((item, index) => (
					<SwiperSlide key={index}>
						<ClientCard
							avatar={item.avatar}
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

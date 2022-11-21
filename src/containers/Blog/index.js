import { useState } from 'react';

import { SwiperSlide } from 'swiper/react';

import BlogCard from '../../components/UI/Blog/BlogCard';
import SliderButton from '../../components/UI/Slider/SliderButton';
import SliderPagination from '../../components/UI/Slider/SliderPagination';
import useFirestore from '../../hooks/useFirestore';

import Slider from '../../components/UI/Slider/Slider';

const Blog = () => {
	const { docs} = useFirestore('blog');

	return (
			docs.length > 0 && 
			<Slider
				breakpoints={
					{
						768: {
							slidesPerView: 2,
						},
						1024: {
							slidesPerView: 3,
						},
					}
				}
			>
				{docs && docs.map((blogItem) => (
					<SwiperSlide key={blogItem.id}>
						<BlogCard
							title={blogItem.title}
							description={blogItem.description}
							tags={blogItem.tags}
							img={blogItem.image}
						/>
					</SwiperSlide>
				))}
			</Slider>
			
	);
};

export default Blog;

import { useRouteLoaderData } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import BlogCard from '@components/Blog/BlogCard';

import Title from '@components/Title';
import Slider from '@components/UI/Slider';

const BlogSection = () => {
	const { blogs } = useRouteLoaderData('root');
	return (
		<div>
			<div className="pt-[115px] pb-[70px]">
				<Title title="Lastest Blog" />
				{
					<Slider
						breakpoints={{
							768: {
								slidesPerView: 2,
							},
							1024: {
								slidesPerView: 3,
							},
						}}
					>
						{blogs.map((blog) => (
							<SwiperSlide key={blog.id}>
								<BlogCard
									id={blog.id}
									title={blog.title}
									description={blog.description}
									tags={blog.tags}
									img={blog.image}
								/>
							</SwiperSlide>
						))}
					</Slider>
				}
			</div>
		</div>
	);
};

export default BlogSection;

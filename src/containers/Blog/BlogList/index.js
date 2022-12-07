import { SwiperSlide } from 'swiper/react';
import BlogCard from '../BlogCard';
import Slider from '../../../components/UI/Slider';

const BlogList = ({ blogs }) => {
	return (
		<>
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
		</>
	);
};

export default BlogList;

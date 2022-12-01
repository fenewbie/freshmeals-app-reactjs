import { SwiperSlide } from 'swiper/react';
import BlogCard from '../../../components/BlogCard';
import useFirestore from '../../../hooks/useFirestore';
import Slider from '../../../components/UI/Slider';
import Title from '../../../components/Title';

const BlogSection = () => {
	const { docs } = useFirestore('blog');

	return (
		<div className="pt-[115px] pb-[70px]">
			<Title title="Lastest Blog" />
			<div>
				{docs.length > 0 && (
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
						{docs &&
							docs.map((blogItem) => (
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
				)}
			</div>
		</div>
	);
};

export default BlogSection;

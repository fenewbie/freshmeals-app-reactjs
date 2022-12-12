import BlogSlider from '@components/Blog/BlogSlider';
import Slider from '@components/UI/Slider';
import { useRouteLoaderData } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import BlogList from '../../../components/Blog/BlogList';

import Title from '../../../components/Title';

const BlogSection = () => {
	const { blogs } = useRouteLoaderData('root');
	return (
		<div>
			<div className="pt-[115px] pb-[70px]">
				<Title title="Lastest Blog" />
				<BlogSlider blogs={blogs}/>
			</div>
		</div>
	);
};

export default BlogSection;

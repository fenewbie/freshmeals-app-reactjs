import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Keyboard, Navigation } from 'swiper';

import BlogCard from '../../components/UI/Blog/BlogCard';
import SliderButton from '../../components/UI/Slider/SliderButton';
import SliderPagination from '../../components/UI/Slider/SliderPagination';
import useFirestore from '../../hooks/useFirestore';

const Blog = () => {
	const [toggleBtn, setToggleBtn] = useState(false);
	const [indexAct, setIndexAct] = useState();

	const { docs} = useFirestore('blog');

	return (
		<div
			className="my-8"
			onMouseEnter={() => {
				setToggleBtn(!toggleBtn);
			}}
			onMouseLeave={() => {
				setToggleBtn(toggleBtn);
			}}
		>
			{docs.length > 0 && (
				<Swiper
					slidesPerView={1}
					spaceBetween={30}
					loop={true}
					keyboard={{
						enabled: true,
					}}
					modules={[Keyboard, Navigation]}
					breakpoints={{
						768: {
							slidesPerView: 2,
						},
						1024: {
							slidesPerView: 3,
						},
					}}
					onSlideChange={(e) => setIndexAct(e.realIndex)}
					className="mySwiper"
				>
					<SliderButton
						isNext={false}
						iconSize={30}
						iconColors={['white', '#80B500']}
						className={`p-2 bg-white rounded-full border-gray-200 border-2 hover:bg-greenBtn ${
							toggleBtn
								? 'visible translate-x-[0%] opacity-100'
								: 'invisible -translate-x-[30%] opacity-0'
						} shadow-2xl transition-all ease-in-out duration-300 lg:block hidden focus:outline focus:outline-2 focus:outline-greenBtn`}
						iconClassName={`transition-all ease-in-out duration-300`}
					/>
					<SliderButton
						isNext={true}
						iconSize={30}
						iconColors={['white', '#80B500']}
						className={`p-2 bg-white rounded-full border-gray-200 border-2 hover:bg-greenBtn ${
							toggleBtn
								? 'visible translate-x-[0%] opacity-100'
								: 'invisible translate-x-[30%] opacity-0'
						} shadow-2xl transition-all ease-in-out duration-300 lg:block hidden  focus:outline focus:outline-2 focus:outline-greenBtn`}
						iconClassName={`transition-all ease-in-out duration-300`}
					/>

					<SliderPagination totalSlides={docs.length} indexAct={indexAct} />

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
				</Swiper>
			)}
		</div>
	);
};

export default Blog;

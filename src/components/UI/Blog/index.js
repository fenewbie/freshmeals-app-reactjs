import { SwiperSlide } from "swiper/react";
import BlogCard from "./BlogCard";
import BlogSwiper from "./BlogSwiper";

import SliderButton from '../Slider/SliderButton';
import { useState } from "react";

const Blog = () => {
    const [toggleBtn, setToggleBtn] = useState(false);
    
    
    return (
        <div className="my-8"
            onMouseEnter={() => {
                setToggleBtn(true);
            }}
            onMouseLeave={() => {
                setToggleBtn(false);
            }}
        >
            <BlogSwiper>
                <SliderButton
						isNext={false}
						iconSize={36}
						iconColors={['white', '#80B500']}
						className={`p-3 bg-transparent rounded border-gray-400 border-2 hover:border-white hover:bg-greenBtn ${
							toggleBtn ? 'visible translate-x-[0%] opacity-100' : 'invisible -translate-x-[30%] opacity-0'
						} transition-all ease-in-out duration-300 lg:block hidden`}
						iconClassName={`transition-all ease-in-out duration-300`}
				/>
                <SwiperSlide><BlogCard/></SwiperSlide>
                <SwiperSlide><BlogCard/></SwiperSlide>
                <SwiperSlide><BlogCard/></SwiperSlide>
                <SwiperSlide><BlogCard/></SwiperSlide>
                <SwiperSlide><BlogCard/></SwiperSlide>
                <SwiperSlide><BlogCard/></SwiperSlide>
                <SliderButton
						isNext={true}
						iconSize={36}
						iconColors={['white', '#80B500']}
						className={`p-3 bg-transparent rounded border-gray-400 border-2 hover:border-white hover:bg-greenBtn ${
							toggleBtn ? 'visible translate-x-[0%] opacity-100' : 'invisible -translate-x-[30%] opacity-0'
						} transition-all ease-in-out duration-300 lg:block hidden`}
						iconClassName={`transition-all ease-in-out duration-300`}
				/>
            </BlogSwiper>
        </div>
    )
}

export default Blog;
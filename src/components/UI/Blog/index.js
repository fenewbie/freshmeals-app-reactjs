import { useState, useEffect } from "react";
import {db} from '../../../services/firebase';
import { collection, getDocs } from 'firebase/firestore';

import { Swiper ,SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Keyboard, Navigation } from "swiper";

import BlogCard from "./BlogCard";
import SliderButton from '../Slider/SliderButton';
import SliderPagination from "./SliderPagination";

const Blog = () => {
    const [blogImgs, setBlogImgs] = useState([]);
    const [toggleBtn, setToggleBtn] = useState(false);
    const [indexAct, setIndexAct] = useState();

    useEffect(() => {
        const getImgs = async () => {
        const docRef = collection(db, 'blog');
        const resp = await getDocs(docRef);
        setBlogImgs(resp.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        };
        getImgs();
    }, []);

    return (
        <div className="my-8"
            onMouseEnter={() => {
                setToggleBtn(true);
            }}
            onMouseLeave={() => {
                setToggleBtn(false);
            }}
        >

            {
                blogImgs.length > 0 && 
                <Swiper 
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    keyboard={{
                        enabled: true,
                    }}
                    modules={[Keyboard,Navigation]}
                    breakpoints={{
                        768: {
                            slidesPerView: 2
                            
                        },
                        1024: {
                            slidesPerView: 3
                            
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
                            toggleBtn ? 
                                'visible translate-x-[0%] opacity-100' : 
                                'invisible -translate-x-[30%] opacity-0' 
                        } shadow-2xl transition-all ease-in-out duration-300 lg:block hidden focus:outline focus:outline-2 focus:outline-greenBtn`}
                        iconClassName={`transition-all ease-in-out duration-300`}
                    /> 
                    <SliderButton
                        isNext={true}
                        iconSize={30}
                        iconColors={['white', '#80B500']}
                        className={`p-2 bg-white rounded-full border-gray-200 border-2 hover:bg-greenBtn ${
                            toggleBtn ? 
                                'visible translate-x-[0%] opacity-100' : 
                                'invisible translate-x-[30%] opacity-0'
                        } shadow-2xl transition-all ease-in-out duration-300 lg:block hidden  focus:outline focus:outline-2 focus:outline-greenBtn`}
                        iconClassName={`transition-all ease-in-out duration-300`}
                    /> 

                    <SliderPagination totalSlides={blogImgs.length} indexAct={indexAct}/>

                    {
                        blogImgs.map(blogItem => (
                            <SwiperSlide key={blogItem.id}>
                                <BlogCard 
                                    title={blogItem.title} 
                                    description={blogItem.description} 
                                    tags={blogItem.tags} 
                                    img={blogItem.image}
                                />
                            </SwiperSlide>
                        ))
                    }

                    
                </Swiper>
            }

        </div>
    )
}

export default Blog;
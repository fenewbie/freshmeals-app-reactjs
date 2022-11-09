import { useEffect, useRef, useState } from "react";

import {db} from '../../../services/firebase';
import { collection, getDocs } from 'firebase/firestore';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/pagination";


import SliderButton from '../Slider/SliderButton';
import Title from "./Title";
import Subtitle from "./Subtitle";

const Portfolio = () => {
    const [portfolioImgs, setPortfolioImgs] = useState([]);
    let [showPortfolioBtn, setShowPortfolioBtn] = useState(false);

    useEffect(() => {
        const getImgs = async () => {
            const docRef = collection(db, 'portfolio');
            const resp = await getDocs(docRef);
            setPortfolioImgs(resp.docs.map(doc => ({ ...doc.data(), id: doc.id })));
          };
          getImgs();
    }, []);


    return (
        <div className="bg-[#F7F5EB] py-[120px] text-center">
            <Subtitle>Portfolio</Subtitle>
            <Title>We Have Done</Title>
            <div 
                onMouseEnter={() => {
                    setShowPortfolioBtn(true);
                }}
                onMouseLeave={() => {
                    setShowPortfolioBtn(false);
                }}
            >
                {
                    portfolioImgs.length > 0 &&
                    <Swiper
                        slidesPerView={1}
                        centeredSlides={true}
                        loop={true}
                        grabCursor={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        breakpoints={{
                            768: {
                              slidesPerView: 2,
                              spaceBetween: 30,
                            },
                            1024: {
                              slidesPerView: 4,
                              spaceBetween: 30,
                            },
                        }}
                        className="mySwiper"
                        onClick={(e) => console.log(e.clickedIndex)}
                        // onInit={(e) => e.slideTo(6)}
                        // onInit={() => console.log('swiper is inited')}
                    >

                        <SliderButton
                            isNext={false}
                            iconSize={30}
                            iconColors={['white', '#80B500']}
                            className={`p-3 bg-white rounded-full border-gray-200 border hover:bg-greenBtn ${
                                showPortfolioBtn ? 
                                    'visible translate-x-[0%] opacity-100' : 
                                    'invisible -translate-x-[30%] opacity-0' 
                            } shadow-2xl transition-all ease-in-out duration-300 lg:block hidden`}
                            iconClassName={`transition-all ease-in-out duration-300`}
                        />

                        <SliderButton

                            isNext={true}
                            iconSize={30}
                            iconColors={['white', '#80B500']}
                            className={`p-3 bg-white rounded-full border-gray-200 border hover:bg-greenBtn ${
                                showPortfolioBtn ? 
                                    'visible translate-x-[0%] opacity-100' : 
                                    'invisible translate-x-[30%] opacity-0'
                            } shadow-2xl transition-all ease-in-out duration-300 lg:block hidden`}
                            iconClassName={`transition-all ease-in-out duration-300`}
                        />

                        {
                            portfolioImgs.map(imgItem => (
                                <SwiperSlide key={imgItem.id}>
                                    <div className="overflow-hidden rounded-md">
                                        <img alt='portfolio' src={imgItem.img} className='h-full w-full object-contain  hover:scale-110 transition-all duration-300 ease-linear'/>
                                    </div>
                                </SwiperSlide>
                            ))
                        }


                    </Swiper>
                }
            </div>
            

        </div>
    )
}

export default Portfolio;
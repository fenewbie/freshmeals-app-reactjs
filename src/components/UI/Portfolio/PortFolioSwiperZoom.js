
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,EffectFade, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";


import SliderButton from '../Slider/SliderButton';
import { useContext } from "react";
import { PortfolioContext } from "./PortFolioContext";

const PortSwiperZoom = () => {
    const {portfolioImgs, indexAct, loopSlide, setIndexAct} = useContext(PortfolioContext);
    
    const handleUnmount = (e) => {
        const img = e.target.closest('img');
        !img && setIndexAct();
    }

    return (
        <div className="bg-transparent">
            <div 
            >
                {
                    <Swiper
                        slidesPerView={loopSlide}
                        loop={true}
                        centeredSlides={true}
                        effect="fade"
                        modules={[EffectFade, Navigation, Pagination]}
                        pagination={{
                            type: 'fraction'
                        }}
                        onInit={(e) => {
                            console.log(e.$el);
                            e.slideTo(indexAct);
                        }}
                        className="mySwiper"
                    >

                        <SliderButton
                            isNext={false}
                            iconSize={30}
                            iconColors={['white', '#80B500']}
                            className={`p-2 bg-transparent max-md:bg-white rounded-full border-[#ccc] border-2 translate-x-[0%] shadow-2xl transition-all ease-in-out duration-300 hover:bg-greenBtn opacity-80 hover:opacity-100`}
                            iconClassName={`transition-all ease-in-out duration-300`}
                        />

                        <SliderButton
                            isNext={true}
                            iconSize={30}
                            iconColors={['white', '#80B500']}
                            className={`p-2 bg-transparent max-md:bg-white rounded-full border-[#ccc] border-2 translate-x-[0%] shadow-2xl transition-all ease-in-out duration-300 hover:bg-greenBtn opacity-80 hover:opacity-100`}
                            iconClassName={`transition-all ease-in-out duration-300`}
                        />

                        {
                            portfolioImgs.map(imgItem => (
                                <SwiperSlide key={imgItem.id}>
                                    <div className="overflow-hidden rounded-md h-[400px]" onClick={handleUnmount}>
                                        <img alt='portfolio' src={imgItem.img} className='h-full  object-contain mx-auto'/>
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

export default PortSwiperZoom;
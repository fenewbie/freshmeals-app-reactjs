
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,EffectFade, Navigation , Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";


import SliderButton from '../Slider/SliderButton';
import { memo } from "react";

const PortSwiperZoom = ({loopSlide, indexAct, children, handleUnmount}) => {
    
    const handleClickSlide = (e) => {
        const img = e.target.closest('img');
        !img && handleUnmount();
    }

    console.log('mounted or unmount');


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
                        keyboard={{
                            enabled: true,
                        }}
                        modules={[EffectFade, Navigation, Pagination, Keyboard]}
                        pagination={{
                            type: 'fraction'
                        }}
                        onInit={(e) => {
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

                        {children.map((child, index) => (
                            <SwiperSlide key={index} onClick={handleClickSlide}>
                                <div className="overflow-hidden rounded-md pt-[60%] md:pt-[40%] w-[80%] md:w-1/2 mx-auto relative">
                                    <div className="absolute top-0 left-0 w-full h-full">
                                        {child}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}


                    </Swiper>
                }
            </div>
            

        </div>
    )
}

export default memo(PortSwiperZoom);
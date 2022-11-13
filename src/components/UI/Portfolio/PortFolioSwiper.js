import { useCallback, useState } from "react";

import { Swiper, SwiperSlide} from "swiper/react";
import { Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import SliderButton from '../Slider/SliderButton';
import PortSwiperZoom from "./PortFolioSwiperZoom";
import Backdrop from "./BackDrop";
import SliderPagination from "../Slider/SliderPagination";

const PortFolioSwiper = ({children}) => {
    const [indexAct, setIndexAct] = useState();
    const [realIndex, setRealIndex] = useState();
    const [togglePortfolioBtn, setTogglePortfolioBtn] = useState(false);
    const [loopSlide, setLoopSlide] = useState();
    
    const handleUnmount = useCallback(() => {
        setIndexAct();
    }, [])
    
    return (
        <div>
            <div 
                onMouseEnter={() => {
                    setTogglePortfolioBtn(true);
                }}
                onMouseLeave={() => {
                    setTogglePortfolioBtn(false);
                }}
            >
                <Swiper
                    centeredSlides={true}
                    loop={true}
                    grabCursor={true}
                    keyboard={{
                        enabled: true,
                    }}
                    modules={[Keyboard]}
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
                    onClick={(e) => {
                        console.log(e.realIndex);
                        setIndexAct(e.clickedIndex);
                    }}

                    onResize={(e) => {
                        setLoopSlide(e.loopedSlides);
                    }}

                    onSlideChange={(e) => {
                        setRealIndex(e.realIndex);
                    }}
                    
                >

                    <SliderButton
                        isNext={false}
                        iconSize={30}
                        iconColors={['white', '#80B500']}
                        className={`p-2 bg-white rounded-full border-gray-200 border-2 hover:bg-greenBtn ${
                            togglePortfolioBtn ? 
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
                            togglePortfolioBtn ? 
                                'visible translate-x-[0%] opacity-100' : 
                                'invisible translate-x-[30%] opacity-0'
                        } shadow-2xl transition-all ease-in-out duration-300 lg:block hidden  focus:outline focus:outline-2 focus:outline-greenBtn`}
                        iconClassName={`transition-all ease-in-out duration-300`}
                    />

                    {children.map((child, index) => (
                        <SwiperSlide key={index}>
                            <div className="overflow-hidden rounded-md my-10">
                                <div className='h-full w-full hover:scale-[1.3] transition-all duration-300 ease-linear'>
                                    {child}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                    <SliderPagination totalSlides={children.length} indexAct={realIndex} />
                </Swiper>

                {indexAct && 
                    <Backdrop handleUnmount={handleUnmount}>
                        <PortSwiperZoom loopSlide={loopSlide} indexAct={indexAct} handleUnmount={handleUnmount}>
                            {children}
                        </PortSwiperZoom>
                    </Backdrop>
                }
            </div>
        </div>
    )
}


export default PortFolioSwiper;
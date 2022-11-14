import { useState } from "react";

import { Swiper} from "swiper/react";
import { Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import SliderButton from '../Slider/SliderButton';

const PortFolioSwiper = ({children, handleSlideChange, handleClick, handleResize}) => {
    const [togglePortfolioBtn, setTogglePortfolioBtn] = useState(false);
    
    return (
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
                    onClick={handleClick}

                    onResize={handleResize}

                    onSlideChange={handleSlideChange}
                    
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

                    {children}

                </Swiper>

                
        </div>
    )
}


export default PortFolioSwiper;
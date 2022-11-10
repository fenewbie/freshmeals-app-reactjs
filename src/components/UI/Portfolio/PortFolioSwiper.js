
import { useContext, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import SliderButton from '../Slider/SliderButton';
import { PortfolioContext } from "./PortFolioContext";
import PortSwiperZoom from "./PortFolioSwiperZoom";
import Backdrop from "./BackDrop";

const PortSwiper = () => {
    const [togglePortfolioBtn, setTogglePortfolioBtn] = useState(false);

    const {portfolioImgs, indexAct, setIndexAct, setLoopSlide } = useContext(PortfolioContext);
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
                    onClick={(e) => {
                        setLoopSlide(e.loopedSlides);
                        setIndexAct(e.clickedIndex);
                    }}
                    
                >

                    <SliderButton
                        isNext={false}
                        iconSize={30}
                        iconColors={['white', '#80B500']}
                        className={`p-2 bg-white rounded-full border-gray-200 border-[3px] hover:bg-greenBtn ${
                            togglePortfolioBtn ? 
                                'visible translate-x-[0%] opacity-100' : 
                                'invisible -translate-x-[30%] opacity-0' 
                        } shadow-2xl transition-all ease-in-out duration-300 lg:block hidden`}
                        iconClassName={`transition-all ease-in-out duration-300`}
                    />

                    <SliderButton
                        isNext={true}
                        iconSize={30}
                        iconColors={['white', '#80B500']}
                        className={`p-2 bg-white rounded-full border-gray-200 border-[3px] hover:bg-greenBtn ${
                            togglePortfolioBtn ? 
                                'visible translate-x-[0%] opacity-100' : 
                                'invisible translate-x-[30%] opacity-0'
                        } shadow-2xl transition-all ease-in-out duration-300 lg:block hidden`}
                        iconClassName={`transition-all ease-in-out duration-300`}
                    />

                    {
                        portfolioImgs.map(imgItem => (
                            <SwiperSlide key={imgItem.id}>
                                <div className="overflow-hidden rounded-md">
                                    <img alt='portfolio' src={imgItem.img} className='h-full w-full object-contain  hover:scale-[1.3] transition-all duration-300 ease-linear'/>
                                </div>
                            </SwiperSlide>
                        ))
                    }


                </Swiper>
            </div>
            
            {
                indexAct && <Backdrop handleUnmount={() => setIndexAct(false)}><PortSwiperZoom/></Backdrop>

            }
            
        </div>
    )
}


export default PortSwiper;
import { useState, useEffect, useCallback } from "react";
import {db} from '../../../services/firebase';
import { collection, getDocs } from 'firebase/firestore';

import { SwiperSlide } from "swiper/react";
import "swiper/css";

import Title from "./Title";
import PortFolioSwiper from "./PortFolioSwiper";
import SliderPagination from '../Slider/SliderPagination';
import Backdrop from './BackDrop'
import PortSwiperZoom from "./PortFolioSwiperZoom";

const Portfolio = () => {
    const [portfolioImgs, setPortfolioImgs] = useState([]);
    const [indexAct, setIndexAct] = useState();
    const [realIndex, setRealIndex] = useState(0);
    const [loopSlide, setLoopSlide] = useState();

    useEffect(() => {
        const getImgs = async () => {
            const docRef = collection(db, 'portfolio');
            const resp = await getDocs(docRef);
            setPortfolioImgs(resp.docs.map(doc => ({ ...doc.data(), id: doc.id })));
          };
          getImgs();
    }, []);


    const handleUnmount = useCallback((e) => {
        const img = e.target.closest('img');
        !img && setIndexAct();
    }, [])


    return (
            <div className="bg-[#F7F5EB] py-[120px] text-center">
                <Title title="We Have Done" subtitle="Portfolio"/>
                
                {
                    portfolioImgs.length > 0 &&
                    
                    <PortFolioSwiper 
                        handleSlideChange={(e) => {
                            setRealIndex(e.realIndex);
                        }}
                        handleClick={(e) => {
                            setIndexAct(e.clickedIndex);
                        }}

                        handleResize={(e) => {
                            setLoopSlide(e.loopedSlides);
                        }}
                    >
                        {
                            
                            portfolioImgs.map(imgItem => (
                                <SwiperSlide key={imgItem.id}>
                                    <div className="overflow-hidden rounded-md my-10">
                                        <div className='h-full w-full hover:scale-[1.3] transition-all duration-300 ease-linear'>
                                            <img alt='portfolio' src={imgItem.img} className='h-full w-full object-contain'/>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                            
                        }

                        {
                            <SliderPagination totalSlides={portfolioImgs.length} indexAct={realIndex}/>
                        }

                    </PortFolioSwiper>
                }


                {
                    indexAct && 
                    <Backdrop handleUnmount={() => setIndexAct()}>
                        <PortSwiperZoom loopSlide={loopSlide} indexAct={indexAct}>
                            {
                                portfolioImgs.map(imgItem => (
                                    <SwiperSlide key={imgItem.id} onClick={handleUnmount}>
                                        <div className="overflow-hidden rounded-md relative lg:pt-[30%] pt-[50%] w-full md:w-1/2 bg-transparent mx-auto"

                                        >
                                            <div className='absolute top-0 left-0 h-full w-full '>
                                                <img alt='portfolio' src={imgItem.img} className='h-full w-full object-contain'/>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </PortSwiperZoom>
                    </Backdrop>
                }
            </div>
    )
}

export default Portfolio;
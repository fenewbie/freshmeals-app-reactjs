import { useState, useEffect } from "react";
import {db} from '../../../services/firebase';
import { collection, getDocs } from 'firebase/firestore';

import Title from "./Title";
import Subtitle from "./Subtitle";
import PortFolioSwiper from "./PortFolioSwiper";
import { SwiperSlide } from "swiper/react";

const Portfolio = () => {
    const [portfolioImgs, setPortfolioImgs] = useState([]);

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
                {
                    portfolioImgs.length > 0 &&
                    <PortFolioSwiper>
                        {
                            portfolioImgs.map(imgItem => (
                                <img alt='portfolio' src={imgItem.img} className='h-full w-full object-contain' key={imgItem.id}/>
                            ))
                        }
                    </PortFolioSwiper>
                }
            </div>
    )
}

export default Portfolio;
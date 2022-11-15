import { useEffect, useState } from 'react';
import {db} from '../../../services/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Carousel } from 'flowbite-react';
import './header.css';
import BannerSlideItem from './BannerSlideItem';

const Banner = () => {
  const [sliderImgs, setSliderImgs] = useState([]);

  useEffect(() => {
    const getImgs = async () => {
      const docRef = collection(db, 'slide-header');
      const resp = await getDocs(docRef);
      setSliderImgs(resp.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    getImgs();
  }, []);

  return (
    <div className='relative w-full h-[600px] md:h-[700px] lg:h-screen flex justify-center'>
      {sliderImgs.length > 0 && (
        <Carousel slide={false} id='banner-carousel'>
          {sliderImgs.map(imgItem => (
            <BannerSlideItem key={imgItem.id} imgItem={imgItem} />
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default Banner;

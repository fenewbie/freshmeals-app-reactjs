import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

import apiAxios from '../../../services/apiAxios';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Carousel, Dropdown } from 'flowbite-react';

const Banner = () => {
  const [sliderImgs, setSliderImgs] = useState([]);

  useEffect(() => {
    const getImgs = async () => {
      const resp = await apiAxios.get(`/slide-header`);
      setSliderImgs(resp);
    };
    getImgs();
  }, []);

  useEffect(() => {
    console.log(sliderImgs.length);
  }, [sliderImgs.length]);

  return (
    <div className='w-full h-[600px] md:h-[700px] lg:h-screen top-0 right-0'>
      {/* <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='h-full w-full flex items-center'>
        {sliderImgs.length > 0 &&
          sliderImgs.map(imgItem => (
            <SwiperSlide key={imgItem.id} className='h-full w-full'>
              <img src={imgItem['image-slide']} className='h-full w-full' />
              Img {imgItem.id}
            </SwiperSlide>
          ))}
      </Swiper> */}
      {sliderImgs.length > 0 && (
        <Carousel className='h-full w-full'>
          {sliderImgs.map(imgItem => (
            <img
              key={imgItem.id}
              src={imgItem['image-slide']}
              className='h-full w-full'
              alt={imgItem.subtitle}
            />
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default Banner;

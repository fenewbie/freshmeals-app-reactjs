import { useEffect, useState } from 'react';

// import apiAxios from '../../../services/apiAxios';
import axios from 'axios';
import { Carousel, Dropdown } from 'flowbite-react';

const Banner = () => {
  const [sliderImgs, setSliderImgs] = useState([]);

  useEffect(() => {
    const getImgs = async () => {
      const resp = await axios.get(`https://freshmeals-database.glitch.me/slide-header`);
      setSliderImgs(resp.data);
    };
    getImgs();
  }, []);

  return (
    <div className='w-full h-[600px] md:h-[700px] lg:h-screen top-0 right-0 flex justify-center'>
      {sliderImgs.length > 0 && (
        <Carousel slide={false} className='rounded-none'>
          {sliderImgs.map(imgItem => (
            <img
              key={imgItem.id}
              src={imgItem['image-slide']}
              className='block w-full h-full sm:object-cover md:object-cover object-none m-0 rounded-none'
              alt={imgItem.subtitle}
            />
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default Banner;

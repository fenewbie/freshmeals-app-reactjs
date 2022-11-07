import { useEffect, useState } from 'react';
import {db} from '../../../services/firebase';
import { collection, getDocs } from 'firebase/firestore';
import BannerSlideItem from './BannerSlideItem';

import { SwiperSlide, Swiper } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import SliderButton from '../../UI/Slider/SliderButton';

const Banner = () => {
  const [sliderImgs, setSliderImgs] = useState([]);
  let [showNavBtn, setShowNavBtn] = useState(false);

  useEffect(() => {
    const getImgs = async () => {
      const docRef = collection(db, 'slide-header');
      const resp = await getDocs(docRef);
      setSliderImgs(resp.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    getImgs();
  }, []);

  return (
		<div
			className="relative w-full h-[600px] md:h-[700px] lg:h-screen flex justify-center"
			onMouseEnter={() => {
				setShowNavBtn(true);
			}}
			onMouseLeave={() => {
				setShowNavBtn(false);
			}}
		>
			{sliderImgs.length > 0 && (
				<Swiper loop={true} pagination={true} modules={[Pagination]}>
					<SliderButton
						isNext={false}
						iconSize={36}
						iconColors={['white', 'greenBtn']}
						className={`p-3 bg-transparent rounded-full border-greenBtn border-2 hover:border-white hover:bg-greenBtn ${
							showNavBtn ? 'visible' : 'invisible'
						} ease-in-out duration-300`}
					/>
					<SliderButton
						isNext={true}
						iconSize={36}
						iconColors={['white', 'greenBtn']}
						className={`p-3 bg-transparent rounded-full border-greenBtn border-2 hover:border-white hover:bg-greenBtn ${
							showNavBtn ? 'visible' : 'invisible'
						} transition-all ease-in-out duration-300`}
					/>
					{sliderImgs.map((imgItem) => (
						<SwiperSlide key={imgItem.id}>
							<BannerSlideItem imgItem={imgItem} />
						</SwiperSlide>
					))}
				</Swiper>
			)}
		</div>
	);
};

export default Banner;

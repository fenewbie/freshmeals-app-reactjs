import { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../../services/firebase';
import { Carousel } from 'flowbite-react';

const Banner = () => {
	const [sliderImgs, setSliderImgs] = useState([]);

	useEffect(() => {
		const getImgs = async () => {
			const slideHeaderRef = await getDocs(collection(db, 'slide-header'));
			setSliderImgs(
				slideHeaderRef.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
			);
		};
		getImgs();
	}, []);

	return (
		<div className="w-full h-[600px] md:h-[700px] lg:h-screen top-0 right-0 flex justify-center rounded-none">
			{sliderImgs.length > 0 && (
				<Carousel slide={false}>
					{sliderImgs.map((imgItem) => (
						<img
							key={imgItem.id}
							src={imgItem['image-slide']}
							className="block w-full h-full sm:object-cover md:object-cover object-none m-0 rounded-none"
							alt={imgItem.subtitle}
						/>
					))}
				</Carousel>
			)}
		</div>
	);
};

export default Banner;

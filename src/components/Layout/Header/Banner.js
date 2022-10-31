import { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../../services/firebase';
import { Carousel } from 'flowbite-react';

const Banner = () => {
	const [sliderImgs, setSliderImgs] = useState([]);

	useEffect(() => {
		getImgs();
	}, []);

	function getImgs() {
		const slideHeaderRef = collection(db, 'slide-header');
		getDocs(slideHeaderRef)
			.then((res) => {
				const slideHeader = res.docs.map((doc) => ({
					data: doc.data(),
					id: doc.id,
				}));
				setSliderImgs(slideHeader);
			})
			.catch((err) => console.log('Error is ', err.message));
	}

	return (
		<div className="w-full h-[600px] md:h-[700px] lg:h-screen top-0 right-0 flex justify-center">
			{sliderImgs.length > 0 && (
				<Carousel slide={false} className="rounded-none">
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

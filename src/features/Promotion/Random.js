import { memo, useEffect, useState } from 'react';
import { useRouteLoaderData } from 'react-router-dom';

import PromotionCard from '@components/Promotion';

function Random() {
	const { promotions } = useRouteLoaderData('root');
	const [promotion, setPromotion] = useState();

	useEffect(() => {
		const fetchPromotion = async () => {
			try {
				const pro = await promotions;
				const indexRandom = Math.floor(Math.random() * pro.length);
				setPromotion(pro[indexRandom]);
			} catch (error) {
				console.log(error);
			}
		};

		fetchPromotion();
	}, [promotions]);

	return (
		promotion && (
			<PromotionCard
				id={promotion.id}
				type={promotion.type}
				title={promotion.title}
				subtitle={promotion.subtitle}
				image={promotion.image}
				isRandom
			/>
		)
	);
}

export default memo(Random);

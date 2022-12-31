import PromotionCard from "@components/Promotion/PromotionCard";
import { useEffect, useState } from "react";
import { useRouteLoaderData } from "react-router-dom";

function Random() {
	const {promotions} = useRouteLoaderData('root');
    const [promotion, setPromotion] = useState();
    
    useEffect(() => {
		const indexRandom = Math.floor(Math.random() * promotions.length);
		setPromotion(promotions[indexRandom]);
	}, []);
    
    return (
		promotion  && (
			<PromotionCard
				id={promotion.id}
				type={promotion.type}
				title={promotion.title}
				subtitle={promotion.subtitle}
				image={promotion.image}
			/>
		)
	);
}

export default Random;
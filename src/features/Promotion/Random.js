import PromotionCard from "@components/Promotion/PromotionCard";
import useFirestore from "@hooks/useFirestore";
import { useEffect, useState } from "react";

function Random() {
    const {docs} = useFirestore('promotion');
    const [promotion, setPromotion] = useState();
    
    useEffect(() => {
		const indexRandom = Math.floor(Math.random() * docs.length);
		setPromotion(docs[indexRandom]);
	}, [docs]);
    
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
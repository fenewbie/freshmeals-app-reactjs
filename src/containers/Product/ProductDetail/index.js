import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useFetchDocument from '../../../hooks/useFetchDocument';
import useFirestore from '../../../hooks/useFirestore';

import Loader from '../../../components/UI/Loader';
import ProductArea from './ProductArea';
import ProductRelated from '../ProductRelated';
import PromotionCard from '../../HomeScreen/PromotionSection/PromotionCard';
import ProductTopRated from '../ProductTopRated';

function ProductDetail() {
	const [product, setProduct] = useState(null);

	let { productId } = useParams();
	const { document } = useFetchDocument('products', productId);

	const [promotion, setPromotion] = useState();

	const { docs } = useFirestore('promotion');
	useEffect(() => {
		const random = Math.floor(Math.random() * docs.length);
		setPromotion(docs[random]);
	}, [docs]);

	useEffect(() => {
		setProduct(document);
	}, [document]);

	return (
		<div>
			{product === null ? (
				<Loader />
			) : (
				<div>
					<div className="grid lg:grid-cols-12 md:grid-cols-1 gap-8 my-20">
						<div className="lg:col-span-8">
							<ProductArea product={product} />
						</div>
						<div className="lg:col-span-4 ">
							<ProductTopRated />
							<div className="mt-10">
								{promotion && (
									<PromotionCard
										type={promotion.type}
										title={promotion.title}
										subtitle={promotion.subtitle}
										image={promotion.image}
									/>
								)}
							</div>
						</div>
					</div>

					<ProductRelated types={product.category} />
				</div>
			)}
		</div>
	);
}

export default ProductDetail;

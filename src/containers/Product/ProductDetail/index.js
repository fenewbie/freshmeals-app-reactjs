import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useFetchDocument from '../../../hooks/useFetchDocument';
import useFirestore from '../../../hooks/useFirestore';

import Loader from '../../../components/UI/Loader';
import ProductArea from './ProductArea';
import ProductRelated from '../ProductRelated';
import PromotionCard from '../../HomeScreen/PromotionSection/PromotionCard';
import ProductTopRated from '../ProductTopRated';
import { useDispatch, useSelector } from 'react-redux';
import {
	getProductById,
	getProducts,
} from '../../../redux/products/productSlice';

function ProductDetail() {
	
	const [promotion, setPromotion] = useState();

	let { productId } = useParams();
	const products = useSelector((state) => state.products.products);
	const productById = useSelector((state) => state.products.selectedProduct);

	const dispatch = useDispatch();

	useEffect(() => {
		if (products.length === 0) {
			dispatch(getProducts());
		}
		dispatch(getProductById(productId));
	}, []);

	const { docs } = useFirestore('promotion');
	useEffect(() => {
		const random = Math.floor(Math.random() * docs.length);
		setPromotion(docs[random]);
	}, [docs]);

	useEffect(() => {
		const random = Math.floor(Math.random() * docs.length);
		setPromotion(docs[random]);
	}, [docs]);

	return (
		<div>
			{productById === null ? (
				<Loader />
			) : (
				<div>
					<div className="grid lg:grid-cols-12 md:grid-cols-1 gap-8 my-20">
						<div className="lg:col-span-8">
							<ProductArea product={productById} />
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

					<ProductRelated types={productById.category} />
				</div>
			)}
		</div>
	);
}

export default ProductDetail;

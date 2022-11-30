import PageLayout from '../../../components/Layout/PageLayout';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useFetchDocument from '../../../hooks/useFetchDocument';
import Loading from '../../../components/UI/Loading';
import ProductArea from './ProductArea';
import ProductRelated from '../../../containers/Product/ProductRelated';

import ProductTopRated from '../../../containers/Product/ProductTopRated';
function ProductDetail() {
	const [product, setProduct] = useState(null);
	let { productId } = useParams();
	const { document } = useFetchDocument('products', productId);

	useEffect(() => {
		setProduct(document);
	}, [document]);

	return (
		<PageLayout>
			{product === null ? (
				<Loading />
			) : (
				<div>
					<div className="grid grid-cols-12 gap-8 my-20">
						<div className="col-span-8">
							<ProductArea product={product} />
						</div>
						<div className="col-span-4 ">
							<ProductTopRated />
							<div></div>
						</div>
					</div>

					<ProductRelated types={product.category} />
				</div>
			)}
		</PageLayout>
	);
}

export default ProductDetail;

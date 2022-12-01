import { BsArrowLeftRight } from 'react-icons/bs';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import * as cs from '../../../constants/Constant';

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
		<div>
			{product === null ? (
				<Loading />
			) : (
				<div>
					<div className="grid lg:grid-cols-12 md:grid-cols-1 gap-8 my-20">
						<div className="lg:col-span-8">
							<ProductArea product={product} />
						</div>
						<div className="lg:col-span-4 ">
							<ProductTopRated />
							<div></div>
						</div>
					</div>

					<ProductRelated types={product.category} />
				</div>
			)}
		</div>
	);
}

export default ProductDetail;

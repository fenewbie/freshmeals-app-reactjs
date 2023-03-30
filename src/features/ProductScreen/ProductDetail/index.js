import ProductTopRated from '../ProductTopRated';
import ProductArea from './ProductArea';
import ProductRelated from '../ProductRelated';
import { default as Promotion } from '@features/Promotion/Random';

function ProductDetail({ product }) {
	return (
		<div>
			<div className="grid lg:grid-cols-12 md:grid-cols-1 gap-8">
				<div className="lg:col-span-8">
					<ProductArea product={product} />
				</div>
				<div className="lg:col-span-4 ">
					<ProductTopRated />
					<div className="mt-10">
						<Promotion />
					</div>
				</div>
			</div>

			<ProductRelated types={product.category} />
		</div>
	);
}

export default ProductDetail;

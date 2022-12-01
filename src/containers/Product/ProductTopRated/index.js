import useFirestore from '../../../hooks/useFirestore';
import { FaThList } from 'react-icons/fa';
import ProductItem from '../ProductItem';

function ProductTopRated() {
	const { docs } = useFirestore('products');
	return (
		<div className=" rounded-md border-2 border-gray-200 p-6">
			<h4 className="text-xl font-bold mb-5 flex items-center ">
				<FaThList className="text-xl text-greenBtn mr-3" /> Top Rated Product
			</h4>
			{docs
				.sort((a, b) => b.rating - a.rating)
				.splice(0, 4)
				.map((product, index) => {
					return (
						<ProductItem
							key={product.id}
							id={product.id}
							numReviews={product.review || '100'}
							rating={product.rating}
							image={product.image}
							title={product.title}
							price={product.price * 1 || 100}
							discount={product.discount}
							className={index !== 0 && 'mt-5'}
						/>
					);
				})}
		</div>
	);
}

export default ProductTopRated;
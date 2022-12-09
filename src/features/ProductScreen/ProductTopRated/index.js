import { FaThList } from 'react-icons/fa';
import ProductItem from '../ProductItem';
import { useRouteLoaderData } from 'react-router-dom';

function ProductTopRated() {
	const { products } = useRouteLoaderData('root');
	return (
		<div className=" rounded-md border-2 border-gray-200 p-6">
			<h4 className="text-xl font-bold mb-5 flex items-center ">
				<FaThList className="text-xl text-greenBtn mr-3" /> Top Rated Product
			</h4>
			{products
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

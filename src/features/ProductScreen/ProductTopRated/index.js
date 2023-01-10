import { FaThList } from 'react-icons/fa';
import ProductItem from '../ProductItem';
import { useRouteLoaderData } from 'react-router-dom';
import { memo } from 'react';

function ProductTopRated() {
	const { products } = useRouteLoaderData('root');
	return (
		<div className=" rounded-md border-2 border-gray-200 p-6">
			<h4 className="text-xl font-bold mb-5 flex items-center ">
				<FaThList className="text-xl text-greenBtn mr-3" /> Top Rated
				Product
			</h4>
			{[...products]
				.sort((a, b) => b.rating - a.rating)
				.splice(0, 4)
				.map((product, index) => (
					<ProductItem
						key={product.id}
						{...product}
						reviews={false}
						label={false}
						className={index !== 0 && 'mt-5'}
					/>
				))}
		</div>
	);
}

export default memo(ProductTopRated);

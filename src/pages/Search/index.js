import ProductGrid from '@components/Product/ProductGrid';
import { getCollectionByTitle } from '@services/api';
import { useEffect, useState } from 'react';
import { useRouteLoaderData, useSearchParams } from 'react-router-dom';

function SearchPage() {
	const { title } = useRouteLoaderData('search');
	const { products } = useRouteLoaderData('root');
	const [productsFilter, setProductsFilter] = useState([]);

	useEffect(() => {
		const filters = products.filter((product) => {
			const regular = new RegExp(title, 'i');
			return product.title.search(regular) > -1;
		});
		setProductsFilter(filters);
	}, [products, title]);

	return (
		<div className="container mx-auto">
			{productsFilter.length > 0 ? (
				<ProductGrid products={productsFilter} />
			) : (
				<p>No result</p>
			)}
		</div>
	);
}

export default SearchPage;

export const loader = async ({ request }) => {
	const url = new URL(request.url);
	const title = url.searchParams.get('product-title');
	// const result = await getCollectionByTitle('products', 'title', title);
	// console.log(result);
	return { title };
};

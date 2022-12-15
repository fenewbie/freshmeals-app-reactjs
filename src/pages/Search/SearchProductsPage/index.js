import { useEffect, useState } from 'react';
import { useLocation, useRouteLoaderData } from 'react-router-dom';

import Title from '@components/Title';
import Grid from '@components/UI/Grid';
import ProductItem from '@features/ProductScreen/ProductItem';
import ProductGrid from '@components/Product/ProductGrid';

function SearchProductsPage() {
	const { products } = useRouteLoaderData('root');
	const location = useLocation();
	const [resultSearch, setResultSearch] = useState([]);

	useEffect(() => {
		if (location.search) {
			const query = new URLSearchParams(location.search);
			const value = query.get('title');
			const result = products.filter((item) => {
				const regular = new RegExp(value, 'i');
				return item.title.search(regular) > -1;
			});
			setResultSearch(result);
		}
	}, [location]);

	return (
		<div className="container mx-auto py-28">
			{resultSearch.length > 0 ? (
				<>
					<Title title={`Search result: ${resultSearch.length} products`} />
					<ProductGrid products={resultSearch} />
				</>
			) : (
				<span className="font-bold text-center block">
					No search result
				</span>
			)}
		</div>
	);
}

export default SearchProductsPage;

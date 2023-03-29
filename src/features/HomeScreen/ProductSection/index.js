import { Await, useRouteLoaderData } from 'react-router-dom';
import ProductList from '@features/ProductScreen/ProductList';
import { Suspense } from 'react';

export default function ProductSection() {
	const { products } = useRouteLoaderData('root');
	return (
		<div className="container my-28">
			<Suspense>
				<Await
					resolve={products}
					children={(products) => <ProductList products={products} />}
				/>
			</Suspense>
		</div>
	);
}

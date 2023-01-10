import ProductList from '@features/ProductScreen/ProductList';
import { useRouteLoaderData } from 'react-router-dom';


export default function ProductSection() {
	const { products } = useRouteLoaderData('root');
	return (
		<div className="container my-28">
			<ProductList products={products} />
		</div>
	);
}

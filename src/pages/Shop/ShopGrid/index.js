import { useLoaderData } from 'react-router-dom';
import ProductList from '../../../containers/Product/ProductList';
import { getProducts } from '../../../services/api';

export default function ShopGrid() {
	console.log('shop grid running');

	const productsList = useLoaderData();
	console.warn('ProductList', productsList);

	return (
		<div>
			<ProductList />
		</div>
	);
}

export const loader = () => {
	return getProducts();
}

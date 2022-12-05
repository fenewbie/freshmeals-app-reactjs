import { useLoaderData } from 'react-router-dom';
import ProductList from '../../../containers/Product/ProductList';
import { getProducts } from '../../../services/api';

export default function ShopGrid() {

	const productsList = useLoaderData();

	return (
		<div>
			<ProductList products= {productsList}/>
		</div>
	);
}

export const loader = () => {
	return getProducts();
}

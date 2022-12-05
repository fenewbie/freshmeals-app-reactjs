import { useRouteLoaderData } from 'react-router-dom';
import ProductList from '../../../containers/Product/ProductList';

export default function ShopGrid() {

	const productsList = useRouteLoaderData('root');

	return (
		<div>
			<ProductList products= {productsList}/>
		</div>
	);
}


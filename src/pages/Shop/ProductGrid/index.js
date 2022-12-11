import { useRouteLoaderData } from 'react-router-dom';
import ProductList from '@features/ProductScreen/ProductList';

export default function ProductGrid() {

	const {products} = useRouteLoaderData('root');

	return (
		<div>
			<ProductList products= {products}/>
		</div>
	);
}

 
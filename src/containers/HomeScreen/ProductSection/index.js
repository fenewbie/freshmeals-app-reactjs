import { useRouteLoaderData } from 'react-router-dom';
import ProductList from '../../Product/ProductList';

export default function ProductSection() {
	const { products } = useRouteLoaderData('root');
	return <ProductList products={products} />;
}

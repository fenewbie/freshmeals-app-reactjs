import { useLoaderData } from 'react-router-dom';
import ProductDetail from '@features/ProductScreen/ProductDetail';
import { getDocumentById } from '@services/api';

export default function ProductDetailPage() {
	const productById = useLoaderData();
	return <ProductDetail product={productById} />;
}

export function loader({ params }) {
	const productbyId = getDocumentById(params.productId, 'products');
	if (!productbyId) {
		throw new Response('', {
			status: 404,
			statusText: 'Not Found',
		});
	}
	return productbyId;
}

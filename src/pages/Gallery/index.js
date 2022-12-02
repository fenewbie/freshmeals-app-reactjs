import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductById, getProducts } from '../../redux/products/productSlice';

const Gallery = () => {
	let { productId } = useParams();

	console.log(productId);

	const products = useSelector((state) => state.products.products);
	console.log(("products"), products)

	const product = useSelector((state) => state.products.selectedProduct);
	console.warn(product);

	const dispatch = useDispatch();
	useEffect(() => {
		if (products.length === 0) {
			dispatch(getProducts());
		}
		dispatch(getProductById(productId));
	}, []);

	return (
		<div>
			<h1 className="text-4xl">Gallery</h1>
			{/* <div>{product.title}</div> */}
		</div>
	);
};

export default Gallery;

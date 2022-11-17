import {useEffect} from 'react'
import Product from '../../../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/products/productSlice';

const OurProducts = () => {
	const productsList = useSelector((state) => state.products.products);
	const dispatch = useDispatch();

	useEffect(() => {
		if (productsList.length === 0) {
			dispatch(getProducts());
		}
	}, []);
	return (
		<div className="grid grid-cols-4 gap-[30px] py-[100px]">
			{productsList?.map((product, index) => {
				return (
					<Product
						key={index}
						imgSrc={product.image}
						name={product.title}
						newPrice={product.price}
					/>
				);
			})}
		</div>
	);
};

export default OurProducts;

import { useEffect, useState } from 'react';

import MainLayout from '../../components/Layout/MainLayout';
import Product from '../../components/Product';
import apiAxios from '../../services/apiAxios';

const ProductList = () => {
	const [data, setData] = useState([]);

	const OurProducts = () => {
		useEffect(() => {
			apiAxios.get('/search/?query=vegetables').then((res) => {
				console.log(res.products);
				setData(res.products);
			});
		}, []);
	};
	return (
		<div className="grid grid-cols-4 gap-[30px] py-[100px]">
			{data.map((item, index) => {
				console.log(item.image);
				return (
					<Product
						key={index}
						imgSrc={'hihi'}
						name={item.name}
						newPrice={item.price}
					/>
				);
			})}
		</div>
	);
};

export default ProductList;

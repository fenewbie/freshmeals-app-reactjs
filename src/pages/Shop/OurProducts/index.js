import {useEffect} from 'react'
import { useFetchProductsQuery } from '../../../redux/api/apiSlice';
import Product from '../../../components/Product';

const OurProducts = () => {
	const { data, isLoading, isError, error } = useFetchProductsQuery();
    
	useEffect(() => {
        isError && <div>{error}</div>;
	}, [isError]);
    
        if (isLoading) {
        	return <div>Loading....</div>;
        }

	return (
		<div className="grid grid-cols-4 gap-[30px] py-[100px]">
			{data?.map((product, index) => {
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

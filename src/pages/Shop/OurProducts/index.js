import ProductCard from '../../../components/Product';
import useFirestore from '../../../hooks/useFirestore';

const OurProducts = () => {
	const { docs } = useFirestore('products');
	console.log('docs in our products', docs);
	return (
		<div className="grid grid-cols-4 gap-[30px] py-[100px]">
			{docs?.map((item) => (
				<ProductCard
					key={item.id}
					image={item.image}
					title={item.title}
					price={item.price}
					discount={item.discount}
					label={item.label}
				/>
			))}
		</div>
	);
};

export default OurProducts;

import useFirestore from '../../hooks/useFirestore';
import { shuffle } from '../../helpers/helpers';
import Rating from '../Product/ProductItem/Rating';
import { Link } from 'react-router-dom';
import { BtnIcon } from '../Product/ProductItem/BtnIcon';
import Title from '../../components/UI/Title';
import ProductItem from '../Product/ProductItem';

export default function FeatureHomePage() {
	const { docs } = useFirestore('products');
	const shuffleProducts = shuffle(docs);
	const featureProducts = shuffleProducts.slice(0, 8);

	return (
		<div className="my-[120px]">
			<Title title="Featured Products" />
			<div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-[30px] mt-[15px]  ">
				{featureProducts.map((el) => (
					<ProductItem
						key={el.id}
						id={el.id}
						rating={el.rating}
						numReviews={el.numReviews}
						image={el.image}
						label={el.label || 'offer'}
						title={el.title}
						price={el.price}
						discount={el.discount || 0}
					/>
				))}
			</div>
		</div>
	);
}

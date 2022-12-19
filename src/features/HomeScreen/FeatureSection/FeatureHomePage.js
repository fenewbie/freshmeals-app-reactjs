import { useRouteLoaderData } from 'react-router-dom';

import { shuffle } from '@utils/helpers';
import Title from '@components/Title';
import ProductItem from '@features/ProductScreen/ProductItem';

export default function FeatureHomePage() {
	const { products } = useRouteLoaderData('root');
	const shuffleProducts = shuffle(products);
	const featureProducts = shuffleProducts.slice(0, 8);
	return (
		<div className="my-[120px]">
			<Title title="Featured Products" />
			<div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-[30px] mt-[15px]  ">
				{featureProducts.map((el) => (
					<ProductItem
						key={el.id}
						{...el}
						card
						product={el}
					/>
				))}
			</div>
		</div>
	);
}

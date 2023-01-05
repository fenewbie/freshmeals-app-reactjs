import { useRouteLoaderData } from 'react-router-dom';

import { shuffle } from '@utils/helpers';
import Title from '@components/Title';
import ProductItem from '@features/ProductScreen/ProductItem';

export default function FeatureHomePage() {
	const { products } = useRouteLoaderData('root');
	const shuffleProducts = shuffle(products);
	const featureProducts = shuffleProducts.slice(0, 8);
	return (
		<div className='container xl:max-w-xl lg:max-w-lg md:max-w-md my-28'>
			<Title title="Featured Products" />
			<div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 md:gap-8 gap-4  mt-[15px]">
				{featureProducts.map((el) => (
					<ProductItem
						key={el.id}
						{...el}
						reviews={false}
						card
						product={el}
					/>
				))}
			</div>
		</div>
	);
}

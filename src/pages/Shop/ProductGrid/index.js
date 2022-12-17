import { useRouteLoaderData } from 'react-router-dom';
import { default as Grid } from '@components/Product/ProductGrid';
import CommentSection from '@features/BlogDetailScreen/CommentSection';
import { CommonSection } from '@components/Blog';
import ProductFilter from '@components/Product/ProductFilter';

export default function ProductGrid() {
	const { products } = useRouteLoaderData('root');

	return (
		<div className="container mx-auto py-28">
			<div className="grid md:grid-cols-12 grid-cols-1  gap-8">
				<div className="md:col-span-8">
					<div className="flex justify-between mb-10">
						<h3 className="font-bold">
							Showing 1-12 of 18 results
						</h3>
						
					</div>
					<Grid products={products} />
				</div>
				<div className="md:col-span-4">
					<ProductFilter/>
				</div>
			</div>
		</div>
	);
}

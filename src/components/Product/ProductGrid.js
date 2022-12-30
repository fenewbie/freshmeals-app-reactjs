import Pagination from '@components/UI/Pagination';
import ProductItem from '@features/ProductScreen/ProductItem';
import usePagination from '@hooks/usePagination';

function ProductGrid({ products, cols = 4 }) {
	const { dataRender, currentPage, totalPages, handlePageChange } =
		usePagination({ listData: products, limit: 6 });

	return (
		<div>
			<div
				className={`grid xl:grid-cols-3 grid-cols-2 md:gap-8 gap-4 mb-20`}
			>
				{dataRender.map((product) => (
					<ProductItem
						key={product.id}
						{...product}
						reviews={false}
						card
					/>
				))}
			</div>
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				handlePageChange={handlePageChange}
			/>
		</div>
	);
}

export default ProductGrid;

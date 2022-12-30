import Pagination from '@components/UI/Pagination';
import ProductItem from '@features/ProductScreen/ProductItem';
import usePagination from '@hooks/usePagination';

function ProductGrid({ products, cols = 4 }) {
	const { dataRender, currentPage, totalPages, handlePageChange } =
		usePagination({ listData: products, limit: 6 });

	return (
		<div>
			<div
				className={`grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mb-20`}
			>
				{dataRender.map((product) => (
					<ProductItem
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

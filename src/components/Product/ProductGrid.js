import Pagination from '@components/UI/Pagination';
import ProductItem from '@features/ProductScreen/ProductItem';
import usePagination from '@hooks/usePagination';

function ProductGrid({ products }) {
	const { dataRender, currentPage, totalPages, handlePageChange } =
		usePagination({ listData: products, limit: 3 });

	return (
		<div className='container mx-auto py-28'>
			<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mb-20">
				{dataRender.map((product) => (
					<ProductItem
						key={product.id}
						id={product.id}
						rating={product.rating}
						numReviews={product.reviews}
						image={product.image}
						label={product.label}
						title={product.title}
						price={product.price}
						discount={product.discount}
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
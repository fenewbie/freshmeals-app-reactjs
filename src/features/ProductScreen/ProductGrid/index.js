import Pagination from '@components/UI/Pagination';
import ProductItem from '@features/ProductScreen/ProductItem';
import QuickViewProductModal from '@features/ProductScreen/ProductItem/QuickViewProductModal';
import SuccessModal from '@features/ProductScreen/ProductItem/SuccessModal';
import usePagination from '@hooks/usePagination';
import { useSelector } from 'react-redux';

function ProductGrid({ products, cols = 4 }) {
	const { dataRender, currentPage, totalPages, handlePageChange } =
		usePagination({ listData: products, limit: 6 });

	const quickViewModal = useSelector((state) => state.modal.quickViewModal);
	const successModal = useSelector((state) => state.modal.successModal);
	return (
		<div>
			<div className={`grid xl:grid-cols-3 grid-cols-2 md:gap-8 gap-4 mb-20`}>
				{dataRender.map((product) => (
					<ProductItem key={product.id} {...product} reviews={false} card />
				))}
				{quickViewModal.status ? <QuickViewProductModal /> : null}

				{successModal.status ? <SuccessModal type={successModal.type} /> : null}
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

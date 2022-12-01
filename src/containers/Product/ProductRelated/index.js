import { SwiperSlide } from 'swiper/react';
import Slider from '../../../components/UI/Slider';
import useFirestore from '../../../hooks/useFirestore';

import ProductItem from '../ProductCard/ProductItem';
import Title from '../../../components/Title';
import { useSelector } from 'react-redux';
import QuickViewProductModal from '../ProductCard/QuickViewProductModal';
import SuccessModal from '../ProductCard/SuccessModal';
function ProductRelated({ types }) {
	const { docs } = useFirestore('products');

	const isShowingQuickViewModal = useSelector(
		(state) => state.ui.isShowingQuickViewModal
	);

	const isShowingSuccessModal = useSelector(
		(state) => state.ui.isShowingSuccessModal
	);

	return (
		<div className="py-24">
			<Title title="Related Product" center={false} />
			<Slider
				breakpoints={{
					768: {
						slidesPerView: 2,
					},
					1024: {
						slidesPerView: 4,
					},
				}}
				grid={{ rows: 1, fill: 'row' }}
				loop={true}
			>
				{docs
					.filter((product) => {
						const filterCategories = product.category.filter((item) =>
							types.includes(item)
						);
						return filterCategories.length > 0;
					})
					.flat()
					.map((el) => {
						return (
							<SwiperSlide key={el.id}>
								<ProductItem
									id={el.id}
									rating={el.rating}
									numReviews={el.reviews}
									image={el.image}
									label={el.label || 'free'}
									title={el.title}
									price={el.price}
									discount={el.discount || 0}
									card
								/>
							</SwiperSlide>
						);
					})}
				{isShowingQuickViewModal ? <QuickViewProductModal docs={docs} /> : null}

				{isShowingSuccessModal.status ? (
					<SuccessModal docs={docs} type={isShowingSuccessModal.type} />
				) : null}
			</Slider>
		</div>
	);
}

export default ProductRelated;

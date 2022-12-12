import { SwiperSlide } from 'swiper/react';
import Slider from '@components/UI/Slider';
import { useRouteLoaderData } from 'react-router-dom';

import ProductItem from '../ProductItem';
import Title from '@components/Title';
import { useSelector } from 'react-redux';

import QuickViewProductModal from '../ProductItem/QuickViewProductModal';
import SuccessModal from '../ProductItem/SuccessModal';


function ProductRelated({ types }) {
		const { products } = useRouteLoaderData('root');

	const isShowingQuickViewModal = useSelector(
		(state) => state.modal.isShowingQuickViewModal
	);

	const isShowingSuccessModal = useSelector(
		(state) => state.modal.isShowingSuccessModal
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
				{products
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
				{isShowingQuickViewModal ? (
					<QuickViewProductModal products={products} />
				) : null}

				{isShowingSuccessModal.status ? (
					<SuccessModal products={products} type={isShowingSuccessModal.type} />
				) : null}
			</Slider>
		</div>
	);
}

export default ProductRelated;

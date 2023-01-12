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

	const quickViewModal = useSelector((state) => state.modal.quickViewModal);

	const successModal = useSelector((state) => state.modal.successModal);

	return (
		<div className="pt-24">
			<Title
				title="Related Product"
				center={false}
			/>
			<Slider
				slidesPerView={2}
				spaceBetween={15}
				breakpoints={{
					768: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					1280: {
						slidesPerView: 4,
						spaceBetween: 30,
					},
				}}
				grid={{ rows: 1, fill: 'row' }}
				loop={true}
			>
				{products
					.filter((product) => {
						const filterCategories = product.category.filter(
							(item) => types.includes(item)
						);
						return filterCategories.length > 0;
					})
					.flat()
					.map((el) => {
						return (
							<SwiperSlide key={el.id}>
								<ProductItem
									{...el}
									reviews={false}
									card
								/>
							</SwiperSlide>
						);
					})}
			</Slider>
			{quickViewModal.status ? <QuickViewProductModal /> : null}

			{successModal.status ? (
				<SuccessModal type={successModal.type} />
			) : null}
		</div>
	);
}

export default ProductRelated;

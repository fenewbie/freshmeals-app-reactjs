import { SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

import useFirestore from '../../../hooks/useFirestore';
import { useSelector } from 'react-redux';

import ProductItem from '../ProductItem';
// import Tabs from '../../../components/UI/Tabs/Tabs';
import Slider from '../../../components/UI/Slider';
import QuickViewProductModal from '../QuickViewProductModal';
import SuccessModal from '../SuccessModal';
import Title from '../../../components/Title';
import Swiper from 'swiper';

const ProductList = () => {
	const { docs } = useFirestore('products');
	const isShowingQuickViewModal = useSelector(
		(state) => state.ui.isShowingQuickViewModal
	);

	const isShowingSuccessModal = useSelector(
		(state) => state.ui.isShowingSuccessModal
	);

	return (
		<div className="mt-[120px]">
			<Title title="Our Products" />
			<div className="mb-[15px]">
				<Tabs>
					<TabList className="flex justify-center flex-wrap pb-6">
						<Tab
							className="text-sm md:text-lg font-bold uppercase px-6 py-4 my-1 mx-2 border-b-2 text-greenBtn border-greenBtn
									 hover:text-greenBtn"
						>
							Food & Drinks
						</Tab>
						<Tab className="text-sm md:text-lg font-bold uppercase px-6 py-4 my-1 mx-2 border-b-2 text-greenBtn border-transparent hover:text-greenBtn">
							Vegetables
						</Tab>
						<Tab className="text-sm md:text-lg font-bold uppercase px-6 py-4 my-1 mx-2 border-b-2 text-greenBtn border-transparent hover:text-greenBtn">
							Bread & Cake
						</Tab>
						<Tab className="text-sm md:text-lg font-bold uppercase px-6 py-4 my-1 mx-2 border-b-2 text-greenBtn border-transparent hover:text-greenBtn">
							Dried Food
						</Tab>
						<Tab className="text-sm md:text-lg font-bold uppercase px-6 py-4 my-1 mx-2 border-b-2 text-greenBtn border-transparent hover:text-greenBtn">
							Fish & Meat
						</Tab>
						<Tab className="text-sm md:text-lg font-bold uppercase px-6 py-4 my-1 mx-2 border-b-2 text-greenBtn border-transparent hover:text-greenBtn">
							Fruits
						</Tab>
					</TabList>

					{/* <Slider
						
					> */}
					<TabPanel>
						<Slider
							breakpoints={{
								768: {
									slidesPerView: 2,
								},
								1024: {
									slidesPerView: 4,
								},
							}}
							grid={{ rows: 2, fill: 'row' }}
							loop={false}
						>
							{docs
								.filter(
									(item) =>
										item.category.includes('food') ||
										item.category.includes('drink')
								)
								.map((el) => (
									<SwiperSlide>
										<ProductItem
											key={el.id}
											id={el.id}
											rating={el.rating}
											numReviews={el.numReviews}
											image={el.image}
											label={el.label || 'free'}
											title={el.title}
											price={el.price}
											discount={el.discount || 0}
										/>
									</SwiperSlide>
								))}
						</Slider>
					</TabPanel>
					<TabPanel>
						<Slider
							breakpoints={{
								768: {
									slidesPerView: 2,
								},
								1024: {
									slidesPerView: 4,
								},
							}}
							grid={{ rows: 2, fill: 'row' }}
							loop={false}
						>
							{docs
								.filter((item) =>
									item.category.includes('vegetables')
								)
								.map((el) => (
									<SwiperSlide>
										<ProductItem
											key={el.id}
											id={el.id}
											rating={el.rating}
											numReviews={el.numReviews}
											image={el.image}
											label={el.label || 'free'}
											title={el.title}
											price={el.price}
											discount={el.discount || 0}
										/>
									</SwiperSlide>
								))}
						</Slider>
					</TabPanel>
					<TabPanel>
						<Slider
							breakpoints={{
								768: {
									slidesPerView: 2,
								},
								1024: {
									slidesPerView: 4,
								},
							}}
							grid={{ rows: 2, fill: 'row' }}
							loop={false}
						>
							{docs
								.filter((item) =>
									item.category.includes('dried food')
								)
								.map((el) => (
									<SwiperSlide>
										<ProductItem
											key={el.id}
											id={el.id}
											rating={el.rating}
											numReviews={el.numReviews}
											image={el.image}
											label={el.label || 'free'}
											title={el.title}
											price={el.price}
											discount={el.discount || 0}
										/>
									</SwiperSlide>
								))}
						</Slider>
					</TabPanel>
					<TabPanel>
						<Slider
							breakpoints={{
								768: {
									slidesPerView: 2,
								},
								1024: {
									slidesPerView: 4,
								},
							}}
							grid={{ rows: 2, fill: 'row' }}
							loop={false}
						>
							{docs
								.filter(
									(item) =>
										item.category.includes('bread') ||
										item.category.includes('cake')
								)
								.map((el) => (
									<SwiperSlide>
										<ProductItem
											key={el.id}
											id={el.id}
											rating={el.rating}
											numReviews={el.numReviews}
											image={el.image}
											label={el.label || 'free'}
											title={el.title}
											price={el.price}
											discount={el.discount || 0}
										/>
									</SwiperSlide>
								))}
						</Slider>
					</TabPanel>
					<TabPanel>
						<Slider
							breakpoints={{
								768: {
									slidesPerView: 2,
								},
								1024: {
									slidesPerView: 4,
								},
							}}
							grid={{ rows: 2, fill: 'row' }}
							loop={false}
						>
							{docs
								.filter(
									(item) =>
										item.category.includes('fish') ||
										item.category.includes('meat')
								)
								.map((el) => (
									<SwiperSlide>
										<ProductItem
											key={el.id}
											id={el.id}
											rating={el.rating}
											numReviews={el.numReviews}
											image={el.image}
											label={el.label || 'free'}
											title={el.title}
											price={el.price}
											discount={el.discount || 0}
										/>
									</SwiperSlide>
								))}
						</Slider>
					</TabPanel>
					<TabPanel>
						<Slider
							breakpoints={{
								768: {
									slidesPerView: 2,
								},
								1024: {
									slidesPerView: 4,
								},
							}}
							grid={{ rows: 2, fill: 'row' }}
							loop={false}
						>
							{docs
								.filter((item) =>
									item.category.includes('fruits')
								)
								.map((el) => (
									<SwiperSlide>
										<ProductItem
											key={el.id}
											id={el.id}
											rating={el.rating}
											numReviews={el.numReviews}
											image={el.image}
											label={el.label || 'free'}
											title={el.title}
											price={el.price}
											discount={el.discount || 0}
										/>
									</SwiperSlide>
								))}
						</Slider>
					</TabPanel>
					{isShowingQuickViewModal ? (
						<QuickViewProductModal docs={docs} />
					) : null}

					{isShowingSuccessModal.status ? (
						<SuccessModal
							docs={docs}
							type={isShowingSuccessModal.type}
						/>
					) : null}
				</Tabs>
			</div>
		</div>
	);
};

export default ProductList;

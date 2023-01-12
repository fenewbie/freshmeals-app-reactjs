import { SwiperSlide } from 'swiper/react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

import Slider from '@components/UI/Slider';
import Title from '@components/Title';
import { labelProduct as label } from '@utils/constants';
import ProductItem from '../ProductItem';
import { useSelector } from 'react-redux';
import QuickViewProductModal from '../ProductItem/QuickViewProductModal';
import SuccessModal from '../ProductItem/SuccessModal';

const ProductList = ({ products }) => {
	const quickViewModal = useSelector((state) => state.modal.quickViewModal);
	const successModal = useSelector((state) => state.modal.successModal);
	return (
		<>
			<Title title="Our Products" />
			<div className="mb-[15px]">
				<Tabs>
					<TabList className="flex justify-center flex-wrap pb-6 relative">
						{label.map((label, index) => (
							<Tab
								className={`relative text-sm md:text-lg font-bold uppercase px-6 py-6 my-1 mx-2
									 hover:text-greenBtn cursor-pointer 
									 ${
											index !== 0 &&
											'before:absolute before:-left-2 before:top-1/2 before:-translate-y-1/2 before:h-4 before:w-[2px] before:bg-[#e9e9e9]'
										}
									
									`}
								selectedClassName="border-greenBtn border-b-2 text-greenBtn outline-0 hover:cursor-pointer"
								key={label.id}
							>
								{label.label}
							</Tab>
						))}
					</TabList>

					<TabPanel>
						<Slider
							slidesPerView={2}
							spaceBetween={15}
							breakpoints={{
								768: {
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
							grid={{ rows: 2, fill: 'row' }}
							loop={false}
						>
							{products
								?.filter(
									(item) =>
										item.category.includes('food') ||
										item.category.includes('drink')
								)
								.map((el) => (
									<SwiperSlide key={el.id}>
										<ProductItem
											{...el}
											card
										/>
									</SwiperSlide>
								))}
						</Slider>
					</TabPanel>
					<TabPanel>
						<Slider
							breakpoints={{
								768: {
									spaceBetween: 30,
								},
								1024: {
									slidesPerView: 3,
								},
								1280: {
									slidesPerView: 4,
								},
							}}
							slidesPerView={2}
							spaceBetween={15}
							grid={{ rows: 2, fill: 'row' }}
							loop={false}
						>
							{products
								?.filter((item) =>
									item.category.includes('vegetables')
								)
								.map((el) => (
									<SwiperSlide key={el.id}>
										<ProductItem
											{...el}
											card
										/>
									</SwiperSlide>
								))}
						</Slider>
					</TabPanel>
					<TabPanel>
						<Slider
							breakpoints={{
								768: {
									spaceBetween: 30,
								},
								1024: {
									slidesPerView: 3,
								},
								1280: {
									slidesPerView: 4,
								},
							}}
							grid={{ rows: 2, fill: 'row' }}
							slidesPerView={2}
							spaceBetween={15}
							loop={false}
						>
							{products
								?.filter((item) =>
									item.category.includes('dried food')
								)
								.map((el) => (
									<SwiperSlide key={el.id}>
										<ProductItem
											{...el}
											card
										/>
									</SwiperSlide>
								))}
						</Slider>
					</TabPanel>
					<TabPanel>
						<Slider
							breakpoints={{
								768: {
									spaceBetween: 30,
								},
								1024: {
									slidesPerView: 3,
								},
								1280: {
									slidesPerView: 4,
								},
							}}
							slidesPerView={2}
							spaceBetween={15}
							grid={{ rows: 2, fill: 'row' }}
							loop={false}
						>
							{products
								?.filter(
									(item) =>
										item.category.includes('bread') ||
										item.category.includes('cake')
								)
								.map((el) => (
									<SwiperSlide key={el.id}>
										<ProductItem
											{...el}
											card
										/>
									</SwiperSlide>
								))}
						</Slider>
					</TabPanel>
					<TabPanel>
						<Slider
							breakpoints={{
								768: {
									spaceBetween: 30,
								},
								1024: {
									slidesPerView: 3,
								},
								1280: {
									slidesPerView: 4,
								},
							}}
							slidesPerView={2}
							spaceBetween={15}
							grid={{ rows: 2, fill: 'row' }}
							loop={false}
						>
							{products
								?.filter(
									(item) =>
										item.category.includes('fish') ||
										item.category.includes('meat')
								)
								.map((el) => (
									<SwiperSlide key={el.id}>
										<ProductItem
											{...el}
											card
										/>
									</SwiperSlide>
								))}
						</Slider>
					</TabPanel>
					<TabPanel>
						<Slider
							breakpoints={{
								768: {
									spaceBetween: 30,
								},
								1024: {
									slidesPerView: 3,
								},
								1280: {
									slidesPerView: 4,
								},
							}}
							slidesPerView={2}
							spaceBetween={15}
							grid={{ rows: 2, fill: 'row' }}
							loop={false}
						>
							{products
								?.filter((item) =>
									item.category.includes('fruits')
								)
								.map((el) => (
									<SwiperSlide key={el.id}>
										<ProductItem
											{...el}
											card
										/>
									</SwiperSlide>
								))}
						</Slider>
					</TabPanel>
				</Tabs>
			</div>

			{quickViewModal.status ? <QuickViewProductModal /> : null}

			{successModal.status ? (
				<SuccessModal type={successModal.type} />
			) : null}
		</>
	);
};

export default ProductList;

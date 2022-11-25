import { SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

import useFirestore from '../../../hooks/useFirestore';
import { useSelector } from 'react-redux';

import ProductItem from '../ProductItem';
// import Tabs from '../../../components/UI/Tabs/Tabs';
import Slider from '../../../components/UI/Slider/Slider';
import QuickViewProductModal from '../QuickViewProductModal';
import SuccessModal from '../SuccessModal';
import Title from '../../../components/UI/Title';

const ProductList = () => {
	const { docs } = useFirestore('products');

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
					<TabPanel className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
						{docs
							.filter(
								(item) =>
									item.category.includes('food') ||
									item.category.includes('drink')
							)
							.map((el) => (
								<ProductItem
									id={el.id}
									rating={el.rating}
									numReviews={el.numReviews}
									image={el.image}
									label={el.label || 'free'}
									title={el.title}
									price={el.price}
									discount={el.discount || 0}
								/>
							))}
					</TabPanel>
					<TabPanel className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
						{docs
							.filter((item) => item.category.includes('vegetables'))
							.map((el) => (
								<ProductItem
									id={el.id}
									rating={el.rating}
									numReviews={el.numReviews}
									image={el.image}
									label={el.label || 'free'}
									title={el.title}
									price={el.price}
									discount={el.discount || 0}
								/>
							))}
					</TabPanel>
					<TabPanel className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
						{docs
							.filter((item) => item.category.includes('dried food'))
							.map((el) => (
								<ProductItem
									id={el.id}
									rating={el.rating}
									numReviews={el.numReviews}
									image={el.image}
									label={el.label || 'free'}
									title={el.title}
									price={el.price}
									discount={el.discount || 0}
								/>
							))}
					</TabPanel>
					<TabPanel className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
						{docs
							.filter(
								(item) =>
									item.category.includes('bread') ||
									item.category.includes('cake')
							)
							.map((el) => (
								<ProductItem
									id={el.id}
									rating={el.rating}
									numReviews={el.numReviews}
									image={el.image}
									label={el.label || 'free'}
									title={el.title}
									price={el.price}
									discount={el.discount || 0}
								/>
							))}
					</TabPanel>
					<TabPanel className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
						{docs
							.filter(
								(item) =>
									item.category.includes('fish') ||
									item.category.includes('meat')
							)
							.map((el) => (
								<ProductItem
									id={el.id}
									rating={el.rating}
									numReviews={el.numReviews}
									image={el.image}
									label={el.label || 'free'}
									title={el.title}
									price={el.price}
									discount={el.discount || 0}
								/>
							))}
					</TabPanel>
					<TabPanel className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
						{docs
							.filter((item) => item.category.includes('fruits'))
							.map((el) => (
								<ProductItem
									id={el.id}
									rating={el.rating}
									numReviews={el.numReviews}
									image={el.image}
									label={el.label || 'free'}
									title={el.title}
									price={el.price}
									discount={el.discount || 0}
								/>
							))}
					</TabPanel>
				</Tabs>
			</div>
		</div>
	);
};

export default ProductList;

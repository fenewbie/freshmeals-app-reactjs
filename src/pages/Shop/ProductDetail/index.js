import PageLayout from '../../../components/Layout/PageLayout';
import { BsArrowLeftRight } from 'react-icons/bs';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import * as cs from '../../../constants/Constant';

import { Link, useParams } from 'react-router-dom';
import SocialLink from '../../../components/UI/SocialLink';
import Button from '../../../components/UI/Button';
import WishList from '../../../containers/Product/QuickViewProductModal/Wishlist';
import ProductListImages from './ProductListImages';
import ProductDescTabs from './ProductDescTabs';
import Rating from '../../../containers/Product/ProductItem/Rating';
import { useEffect, useState } from 'react';
import useFetchDocument from '../../../hooks/useFetchDocument';

function ProductDetail() {
	const [product, setProduct] = useState([]);
	let { productId } = useParams();
	const { document } = useFetchDocument('products', productId);
	
	useEffect(() => {
		setProduct(document);
	}, [document]);

	return (
		<PageLayout>
			{product === null ? (
				<p>Loading...</p>
			) : (
				<div className="grid grid-cols-12 gap-8 my-20">
					<div className="col-span-8">
						<div className="grid grid-cols-1 md:grid-cols-2 md:gap-14">
							<div className="flex-col">
								<div className="mb-5">
									<img
										src={product.image}
										className="h-full object-contain"
										alt={product.title}
									/>
								</div>
								{product.images && (
									<ProductListImages images={product.images} />
								)}
							</div>
							<div>
								<div className="">
									<Rating amount={`24 reviews`} />
									<h4 className="text-2xl font-bold">{product.title}</h4>
									<div className="flex items-center">
										<span className="inline-block text-[40px] font-semibold text-greenBtn">
											${product.price}
										</span>
										<span className="inline-block text-[32px] font-bold text-greenBtn opacity-50 line-through ml-4">
											${product.discount}
										</span>
									</div>
								</div>
								<div className="flex items-center py-5 mb-8 border-t-[1px] border-b-[1px] border-grey">
									<span>Categories:</span>
									{product.label}
								</div>
								<form className="flex">
									<div className="flex  border-2 border-gray-300">
										<button className="inline-block h-12 w-12 border-r-2 border-gray-300">
											<AiOutlineMinus className="mx-auto" />
										</button>
										<input
											type="number"
											className="text-lg font-bold text-center h-12 w-24  focus:outline-greenBtn"
										/>
										<button className="inline-block h-12 w-12 border-l-2 border-gray-300">
											<AiOutlinePlus className="mx-auto" />
										</button>
									</div>
									<Button btn="card" className="mt-0 ml-5">
										Add to cart
									</Button>
								</form>
								<div className="flex mt-5">
									<div className="flex items-center mr-10 hover:text-greenBtn transition-all cursor-pointer">
										<WishList />
										<span className="ml-1 font-medium">Add to Wishlist</span>
									</div>
									<Link className="flex items-center  hover:text-greenBtn transition-all">
										<BsArrowLeftRight />
										<span className="ml-1 font-medium">Compare</span>
									</Link>
								</div>
								<div className="flex items-center border-t-[1px] mt-8">
									<span className="mr-6">Share:</span>
									<SocialLink />
								</div>
								<div className="border-t-[1px] py-6">
									<span className="mr-6 font-bold mb-4">
										Guaranteed Safe Checkout:
									</span>
									<img
										src={cs.paymentMethod}
										alt="payment"
										className="h-[50px] object-contain"
									/>
								</div>
							</div>
						</div>
						<ProductDescTabs />
					</div>
					<div className="col-span-4 bg-red-400">
						<h1>Top rated</h1>
						<span>Promotion</span>
					</div>
				</div>
			)}
		</PageLayout>
	);
}

export default ProductDetail;

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BsArrowLeftRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import * as cs from '@utils/constants';
import SocialLink from '@components/UI/SocialLink';
import Button from '@components/UI/Button';
import { cartActions } from '@store/cart/cartSlice';
import ProductListImages from './ProductListImages';
import ProductDescTabs from './ProductDescTabs';
import Rating from '@components/Product/Rating';
import WishList from '../ProductItem/QuickViewProductModal/Wishlist';
import { Quantity } from '@components/Cart/Quantity';
import { toastMessage } from '@utils/toastMessage';

function ProductArea({ product }) {
	let [quantity, setQuantity] = useState(1);
	const dispatch = useDispatch();

	const { title, discount, image, id } = product;

	const handleAddProductToCart = () => {
		dispatch(
			cartActions.addToCart({
				id,
				title,
				discount,
				image,
				quantity,
			})
		);
		toastMessage('Product successfully added');
	};
	const incrementItem = () => {
		setQuantity(++quantity);
	};
	const decreaseItem = () => {
		if (quantity > 1) {
			setQuantity(--quantity);
		} else {
			setQuantity(0);
		}
	};
	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
				<ProductListImages images={product.images} />
				<div className="max-md:mt-10">
					<div>
						<Rating
							value={product.rating}
							text={product.numReviews}
							size={16}
						/>
						<h4 className="md:text-2xl text-xl font-bold mt-2 capitalize">
							{product.title}
						</h4>
						<div className="flex items-end mt-1">
							<span className="block text-[40px] font-semibold text-greenBtn">
								${product.discount}
							</span>
							<span className="block text-[32px] font-bold text-greenBtn opacity-50 line-through ml-4 mb-1">
								${product.price}
							</span>
						</div>
					</div>
					<div className="flex items-center py-5 mb-8 border-t-[1px] border-b-[1px] border-grey md:text-base text-sm">
						<span>Categories:</span>
						<div className="ml-3">
							{product.category?.map((item, index) => (
								<span
									className="capitalize font-semibold"
									key={index}
								>
									{index === product.category.length - 1
										? item
										: `${item},`}
								</span>
							))}
						</div>
					</div>
					<div className="flex xl:flex-row lg:flex-col">
						<Quantity
							decreaseItem={decreaseItem}
							incrementItem={incrementItem}
							quantity={quantity}
							className="h-14"
						/>
						<Button
							className="btn-animated xl:ml-5 lg:ml-0 ml-5 xl:mt-0 lg:mt-5  mt-0  py-3 w-full"
							onClick={handleAddProductToCart}
						>
							<span className="btn-animated-text">
								Add to cart
							</span>
						</Button>
					</div>
					<div className="flex mt-5">
						<div className="flex items-center mr-10 hover:text-greenBtn transition-all cursor-pointer">
							<WishList />
							<span className="ml-1 font-medium">
								Add to Wishlist
							</span>
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
			<ProductDescTabs
				desc={product.desc}
				review={product.review}
				rating={product.rating}
				numReviews={product.numReviews}
			/>
		</>
	);
}

export default ProductArea;

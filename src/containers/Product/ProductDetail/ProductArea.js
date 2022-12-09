import { BsArrowLeftRight } from 'react-icons/bs';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import * as cs from '../../../constants/Constant';
import SocialLink from '../../../components/UI/SocialLink';
import Button from '../../../components/UI/Button';
import WishList from '../ProductCard/QuickViewProductModal/Wishlist';
import ProductListImages from './ProductListImages';
import ProductDescTabs from './ProductDescTabs';
import Rating from '../ProductCard/Rating';
import { Quantity } from '../../../components/Cart/Quantity';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../../redux/cart/cartSlice';
import { useState } from 'react';

function ProductArea({ product }) {
	let [quantity, setQuantity] = useState(1);

	const dispatch = useDispatch();
	const { title, price, image, id } = product;
	const addItem = () => {
		dispatch(
			cartActions.addToCart({
				id,
				title,
				price,
				image,
				quantity,
			})
		);
		console.log('quantity add to  cart ', quantity);
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
						<Rating value={product.rating} text={product.numReviews} />
						<h4 className="text-2xl font-bold mt-4">{product.title}</h4>
						<div className="flex items-center">
							<span className="inline-block text-[40px] font-semibold text-greenBtn">
								${product.discount}
							</span>
							<span className="inline-block text-[32px] font-bold text-greenBtn opacity-50 line-through ml-4">
								${product.price}
							</span>
						</div>
					</div>
					<div className="flex items-center py-5 mb-8 border-t-[1px] border-b-[1px] border-grey">
						<span>Categories:</span>
						<div className="ml-3">
							{product.category?.map((item, index) => (
								<span className="capitalize font-semibold" key={index}>
									{index === product.category.length - 1 ? item : `${item},`}
								</span>
							))}
						</div>
					</div>
					<div className="flex ">
						<Quantity
							decreaseItem={decreaseItem}
							incrementItem={incrementItem}
							quantity={quantity}
						/>
						<Button btn="cart" className="mt-0 ml-5" onClick={addItem}>
							Add to cart
						</Button>
					</div>
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

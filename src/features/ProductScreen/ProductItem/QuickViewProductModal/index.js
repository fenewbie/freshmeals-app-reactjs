import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { IoClose } from 'react-icons/io5';
import { BsArrowLeftRight } from 'react-icons/bs';

import { modalActions } from '@store/modal/modalSlice';
import { toastMessage } from '@utils/toastMessage';
import { cartActions } from '@store/cart/cartSlice';

import WishList from './Wishlist';
import Modal from '@components/UI/Modal';
import SocialLink from '@components/UI/SocialLink';
import Rating from '@components/Product/Rating';
import Button from '@components/UI/Button/index';
import { Quantity } from '@components/Cart/Quantity';

const QuickViewProductModal = () => {
	const product = useSelector(
		(state) => state.modal.quickViewModal.dataActive
	);
	const { id, title, image, price, rating, reviews, discount, category } =
		product;

	let [quantity, setQuantity] = useState(1);

	const dispatch = useDispatch();

	const incrementItem = () => {
		dispatch(
			cartActions.addToCart({
				id,
				title,
				discount,
				image,
				quantity: 1,
			})
		);
		setQuantity(++quantity);
	};

	const decreaseItem = () => {
		if (quantity > 1) {
			setQuantity(--quantity);
		} else {
			setQuantity(0);
		}
	};
	const handleCloseModal = () => {
		dispatch(modalActions.quickView({ status: false }));
	};
	const addItem = () => {
		dispatch(
			cartActions.addToCart({
				id,
				title,
				discount,
				image,
				quantity: 1,
			})
		);
		toastMessage('Product successfully added');
		handleCloseModal();
	};

	return (
		<Modal
			handleClose={handleCloseModal}
			className="overflow-y-auto overflow-x-hidden scroll-bar"
		>
			<div className="bg-white relative lg:p-8 p-7 rounded  border border-[#e8e8e8] m-auto animate-[modalAppear_300ms_ease-in-out_forwards] lg:w-4/5 w-[90%]">
				<button
					onClick={handleCloseModal}
					className="absolute top-2 right-2 bg-white"
				>
					<IoClose className="md:text-3xl text-4xl" />
				</button>

				<div className="flex items-center max-lg:flex-col lg:gap-10 gap-4">
					<div className="lg:basis-1/2  mx-auto bg-[rgba(0,0,0,0.05)]">
						<img
							src={image}
							className="w-[400px] lg:h-full lg:max-h-[430px]  md:h-[200px] h-[150px] object-contain mx-auto"
							alt={title}
						/>
					</div>
					<div className="">
						<div className="flex max-lg:justify-center">
							<Rating
								value={rating}
								text={reviews}
								size="16"
							/>
						</div>
						<h4 className="text-lg md:text-2xl font-bold mt-2 max-lg:text-center capitalize">
							{title}
						</h4>
						<div className="flex items-end max-lg:justify-center max-md:items-center mt-2">
							<span className="inline-block md:text-5xl text-[33px] font-semibold text-greenBtn">
								${discount.toFixed(2)}
							</span>
							<span className="inline-block md:text-4xl text-3xl font-semibold text-greenBtn opacity-50 line-through ml-4">
								${price.toFixed(2)}
							</span>
						</div>
						<div className="flex items-center max-lg:justify-center md:py-5 py-2 md:my-6 my-4 border-t-[1px] border-b-[1px] border-grey max-md:text-sm">
							<span className="">Categories:</span>
							<ul className="flex items-center ml-5">
								{category?.map((item, index) => (
									<li
										className="font-semibold capitalize"
										key={index}
									>
										{index === 0 ? item : `, ${item}`}
									</li>
								))}
							</ul>
						</div>
						<div className="flex items-center max-md:flex-col md:justify-center lg:justify-start">
							<Quantity
								decreaseItem={decreaseItem}
								incrementItem={incrementItem}
								quantity={quantity}
								className="h-12 md:h-14"
							/>
							<Button
								className="btn-animated md:ml-5 h-full max-md:py-2 max-md:w-full max-md:mt-4"
								onClick={addItem}
							>
								<span className="btn-animated-text max-md:text-sm">
									Add to cart
								</span>
							</Button>
						</div>
						<div className="flex mt-5 max-md:text-sm max-lg:justify-center">
							<div className="flex items-center mr-10 hover:text-greenBtn transition-all cursor-pointer">
								<WishList wishlist={title} />
								<span className="ml-1 font-medium">
									Add to Wishlist
								</span>
							</div>
							<Link
								className="flex items-center  hover:text-greenBtn transition-all"
								to="/shop"
							>
								<BsArrowLeftRight />
								<span className="ml-1 font-medium">
									Compare
								</span>
							</Link>
						</div>
						<div className="flex items-center max-lg:justify-center border-t-[1px] md:mt-8 mt-5 text-sm ">
							<span className="md:mr-6 mr-2">Share:</span>
							<SocialLink />
						</div>
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default QuickViewProductModal;

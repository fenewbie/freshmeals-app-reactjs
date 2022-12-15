import { useDispatch } from 'react-redux';
import { modalActions } from '@store/modal/modalSlice';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';
import Modal from '@components/UI/Modal';
import Button from '@components/UI/Button';
import * as cs from '@utils/constants';
import Loader from '@components/UI/Loader';

function SuccessModal({ type, product }) {
	console.log("product success", product)
	const dispatch = useDispatch();
	const handleClose = () => {
		return dispatch(modalActions.successModal({ status: false, type: null }));
	};

	return (
		<Modal handleClose={handleClose}>
			<div className="bg-white relative p-8 rounded  border border-[#e8e8e8] w-10/12 mx-auto">
				<button
					onClick={handleClose}
					className="absolute top-2 right-2 bg-white"
				>
					<IoClose className="text-3xl" />
				</button>
				{product === undefined ? (
					<Loader />
				) : (
					<div>
						<div className="flex max-md:flex-wrap items-center max-md:justify-center">
							<img
								src={
									product.image ||
									'https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/product/1.png'
								}
								alt="product"
								className="h-32 object-contain mr-6 max-md:m-auto"
							/>
							<div className="max-md:text-center">
								<h4 className="text-xl font-bold max-md:mt-5">
									{product.title}
								</h4>
								<span className="mt-3 inline-block">
									<BsFillCheckCircleFill className="inline relative -top-[1px] mr-2 text-greenBtn" />
									{type === 'cart'
										? 'Success! Product has been added to your cart.'
										: 'Success! Product has been added to your wishlist.'}
								</span>

								{type === 'cart' ? (
									<div className="flex flex-wrap mt-5">
										<Button
											btn="cart"
											className="lg:h-9 md:h-9 md:w-[120px] w-full mt-0"
										>
											View Cart
										</Button>
										<Button
											btn="cart"
											className="lg:h-9 md:h-9 md:w-[120px] w-full md:mt-0 mt-2 md:ml-3"
										>
											Check Out
										</Button>
									</div>
								) : (
									<div>
										<Button
											btn="cart"
											className="lg:h-9 md:h-9 md:w-[120px] w-full mt-3"
										>
											View WishList
										</Button>
									</div>
								)}
							</div>
						</div>
						{type === 'cart' && (
							<div className="pt-5 border-t mt-10">
								<p className="text-center mb-3">
									We give you <b>20% discount</b> for your first order.
									Use(LoveFreshMeals) discount code at checkout
								</p>
								<img
									src={cs.paymentMethod}
									alt="payment"
									className="h-12 mx-auto"
								/>
							</div>
						)}
					</div>
				)}
			</div>
		</Modal>
	);
}

export default SuccessModal;

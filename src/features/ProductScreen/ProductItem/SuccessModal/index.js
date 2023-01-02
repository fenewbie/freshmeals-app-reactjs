import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from '@store/modal/modalSlice';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';
import Modal from '@components/UI/Modal';
import Button from '@components/UI/Button';
import * as cs from '@utils/constants';
import { useNavigate } from 'react-router-dom';

function SuccessModal({ type }) {
	const dispatch = useDispatch();
	const { title, image } = useSelector(
		(state) => state.modal.successModal.dataActive
	);

	const handleClose = () => {
		return dispatch(modalActions.successModal({ status: false, type: null }));
	};

	const navigate = useNavigate();

	const handleCart = () => {
		dispatch(modalActions.successModal({ status: false, type: null }));
		navigate('/cart');
	};
	const handleCheckout = () => {
		dispatch(modalActions.successModal({ status: false, type: null }));
		navigate('/checkout');
	};

	return (
		<Modal handleClose={handleClose}>
			<div className="bg-white relative px-8 py-10 rounded  border border-[#e8e8e8] md:w-4/5 w-[90%] animate-[modalAppear_300ms_ease-in-out_forwards] mx-auto">
				<button
					onClick={handleClose}
					className="absolute top-2 right-2 bg-white"
				>
					<IoClose className="md:text-3xl text-4xl" />
				</button>

				<div>
					<div className="flex max-md:flex-wrap items-center max-md:justify-center">
						<img
							src={
								image ||
								'https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/product/1.png'
							}
							alt="product"
							className="h-32 w-48 object-contain mr-6 max-md:m-auto"
						/>
						<div className="max-md:text-center">
							<h4 className="md:text-xl font-bold max-md:mt-5 text-ellipsis">
								{title}
							</h4>
							<span className="mt-3 inline-block text-sm md:text-base">
								<BsFillCheckCircleFill className="inline relative -top-[1px] mr-2 text-greenBtn" />
								{type === 'cart'
									? 'Success! Product has been added to your cart.'
									: 'Success! Product has been added to your wishlist.'}
							</span>

							{type === 'cart' ? (
								<div className="flex max-md:flex-col md:gap-6 gap-4 mt-5">
									<Button
										btn="card"
										onClick={handleCart}
										className="btn-animated  md:w-[120px] h-full py-2"
									>
										<span className="btn-animated-text text-sm">
											View Cart
										</span>
									</Button>
									<Button
										btn="card"
										onClick={handleCheckout}
										className="btn-animated btn-animated--revert  md:w-[120px] h-full py-2"
										>
										<span className="btn-animated-text text-sm">
											Checkout
										</span>
									</Button>
								</div>
							) : (
								<div className="mt-3">
									<Button className="btn-animated md:w-[120px] w-full mt-3 h-full py-2">
										<span className="btn-animated-text text-sm">
											View WishList
										</span>
									</Button>
								</div>
							)}
						</div>
					</div>
					{type === 'cart' && (
						<div className="pt-5 border-t mt-10">
							<p className="text-center mb-3 text-sm">
								We give you <b>20% discount</b> for your first
								order. Use(LoveFreshMeals) discount code at
								checkout
							</p>
							<img
								src={cs.paymentMethod}
								alt="payment"
								className="h-12 mx-auto"
							/>
						</div>
					)}
				</div>
			</div>
		</Modal>
	);
}

export default SuccessModal;

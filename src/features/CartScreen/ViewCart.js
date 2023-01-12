import { useDispatch, useSelector } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { cartActions } from '@store/cart/cartSlice';
import Modal from '@components/UI/Modal';
import { modalActions } from '@store/modal/modalSlice';
import Button from '@components/UI/Button';

export default function ViewCart({ handleClose, item }) {
	const totalAmount = useSelector((state) => state.cart.totalAmount);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleClick = (link) => {
		dispatch(modalActions.toggleCart());
		navigate(`/${link}`);
	};

	return (
		<Modal
			className="h-full w-full"
			handleClose={handleClose}
		>
			<motion.div
				initial={{ x: '100%' }}
				animate={{ x: '0%' }}
				transition={{ type: 'tween', stiffness: 50 }}
				exit={{ x: '100%' }}
				className="bg-white md:w-96 w-80 fixed inset-y-0 right-0 z-30 px-8 py-6 pb-24 flex flex-col"
			>
				<header className="flex items-center justify-between border-b border-b-sectionBg pb-5">
					<p className="font-bold text-lg">Cart</p>
					<button
						className="md:text-2xl text-4xl"
						onClick={handleClose}
					>
						<MdClose />
					</button>
				</header>
				{item.length === 0 ? (
					<div className="flex flex-col items-center">
						<p className="md:text-xl font-bold mt-3">
							No item in your cart!
						</p>
						<Button
							onClick={() => handleClick('shop')}
							className="flex md:text-xl m-3 px-6 md:py-3 py-2 shadow border hover:bg-greenBtn hover:text-white hover:underline "
						>
							<span>Back to Shop</span>
						</Button>
					</div>
				) : (
					<div className="my-5 flex-1 h-full flex flex-col">
						<div className="overflow-y-auto py-3 scroll-bar">
							{item.map((item, index) => (
								<div
									key={item.id}
									className={`relative py-4 mx-3 ${
										index !== 0 && 'border-t'
									}`}
								>
									<button
										onClick={() => {
											dispatch(
												cartActions.removeItem(item.id)
											);
										}}
										className="absolute bg-green-300 h-6 w-6 rounded-full top-2 -left-2 hover:brightness-95"
									>
										x
									</button>
									<div className="flex flex-row items-center gap-3">
										<div className="md:w-32 w-20 h-24">
											<img
												src={item.image}
												alt={item.title}
												className="w-full h-full object-contain"
											/>
										</div>
										<div className="text-sm flex-1">
											<h3 className="font-bold">
												{item.title}
											</h3>
											<p>
												{item.quantity} x $
												{item.discount.toFixed(2)}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
						<div className="font-bold py-5 mt-3 border-y flex justify-between">
							<span className=" ">Subtotal:</span>
							<span className="text-greenBtn text-lg">
								${totalAmount.toFixed(2)}
							</span>
						</div>
						<div className="flex py-6 max-md:flex-col md:gap-6 gap-4 ">
							<Button
								onClick={() => handleClick('cart')}
								className="btn-animated md:w-1/2 w-full max-md:py-2"
							>
								<span className="btn-animated-text text-sm">
									View Cart
								</span>
							</Button>
							<Button
								className="btn-animated btn-animated--revert md:w-1/2 w-full max-md:py-2"
								onClick={() => handleClick('checkout')}
							>
								<span className="btn-animated-text text-sm">
									Checkout
								</span>
							</Button>
						</div>
						<span className="text-sm">
							Free shipping on All Orders Over $100!
						</span>
					</div>
				)}
			</motion.div>
		</Modal>
	);
}

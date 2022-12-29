import { useDispatch, useSelector } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cartActions } from '@store/cart/cartSlice';
import Modal from '@components/UI/Modal';

export default function ViewCart({ handleClose, item }) {
	const totalAmount = useSelector((state) => state.cart.totalAmount);
	const dispatch = useDispatch();

	return (
		<Modal
			className="h-full w-full"
			handleClose={handleClose}
		>
			<AnimatePresence>
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
							className="text-2xl"
							onClick={handleClose}
						>
							<MdClose />
						</button>
					</header>
					{item.length === 0 ? (
						<div className="flex flex-col items-center">
							<p className="text-xl font-bold">
								No item in your cart!
							</p>
							<Link
								to="../shop"
								className="flex text-xl m-3 px-6 py-3 shadow border hover:bg-greenBtn hover:text-white hover:underline "
							>
								<span>Back to Shop</span>
							</Link>
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
													cartActions.removeItem(
														item.id
													)
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
							<div className="flex py-6 max-md:flex-wrap">
								<Link
									to="/cart"
									className="btn-animated md:mr-5 md:w-1/2 w-full max-md:mb-5"
								>
									<span className="btn-animated-text">
										View Cart
									</span>
								</Link>
								<Link
									className="btn-animated btn-animated--revert md:w-1/2 w-full"
									to="/checkout"
								>
									<span className="btn-animated-text">
										Checkout
									</span>
								</Link>
							</div>
							<span className="text-sm">
								Free shipping on All Orders Over $100!
							</span>
						</div>
					)}
				</motion.div>
			</AnimatePresence>
		</Modal>
	);
}

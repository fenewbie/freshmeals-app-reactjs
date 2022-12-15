import { useDispatch, useSelector } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cartActions } from '@store/cart/cartSlice';

export function CartCheckout({ isShowingCart, handleClose, item }) {
	const { id } = item;
	const totalAmount = useSelector((state) => state.cart.totalAmount);
	const dispatch = useDispatch();
	const deleteItem = () => {
		dispatch(cartActions.removeItem(id));
	};
	return (
		<AnimatePresence>
			{isShowingCart && (
				<motion.div
					initial={{ x: '100%' }}
					animate={{ x: 0 }}
					transition={{ type: 'tween', stiffness: 50 }}
					exit={{ x: '200%' }}
					className="bg-white w-96 h-screen fixed inset-y-0 right-0 z-30 px-8 py-6 flex flex-col"
				>
					<header className="flex items-center justify-between border-b border-b-sectionBg pb-5">
						<p className="font-bold text-lg">Cart</p>
						<button className="text-2xl" onClick={handleClose}>
							<MdClose />
						</button>
					</header>
					{item.length === 0 ? (
						<div className="flex flex-col items-center">
							<p className="text-xl font-bold">No item in your cart!</p>
							<Link
								to="../shop"
								className="flex text-xl m-3 px-6 py-3 shadow border hover:bg-greenBtn hover:text-white hover:underline "
							>
								<span>Back to Shop</span>
							</Link>
						</div>
					) : (
						<div className="my-5 flex-1 overflow-hidden px-2">
							{item.map((item) => (
								<div className="relative py-4 border-b">
									<button
										onClick={deleteItem}
										className="absolute bg-green-300 p-1 rounded-full top-2"
									>
										x
									</button>
									<div className="flex flex-row items-center gap-3">
										<div className="w-32">
											<img
												src={item.image}
												alt={item.title}
												className="w-24 h-24 object-contain"
											/>
										</div>
										<div className="text-sm">
											<p>{item.title}</p>
											<p>
												{item.quantity} x ${item.discount}
											</p>
										</div>
									</div>
								</div>
							))}
							<div className="font-bold py-5 border-y flex justify-between">
								<span className=" ">Subtotal:</span>
								<span className="text-greenBtn text-lg">${totalAmount}</span>
							</div>
							<div className="flex py-6">
								<Link
									className="w-1/2 mr-5 flex items-center justify-center px-4 h-[58px] rounded-md bg-greenBtn hover:bg-[#6a9700] text-white max-md:w-full max-md:mt-3"
									to="/cart"
								>
									View Cart
								</Link>
								<Link
									className="w-1/2 flex items-center justify-center px-4 h-[58px] rounded-md bg-black hover:bg-[#6a9700] text-white max-md:w-full max-md:mt-3"
									to="/checkout"
								>
									Checkout
								</Link>
							</div>
							<span className="text-sm">
								Free shipping on All Orders Over $100!
							</span>
						</div>
					)}
				</motion.div>
			)}
		</AnimatePresence>
	);
}

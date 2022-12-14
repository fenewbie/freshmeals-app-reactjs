import { MdClose } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';
import CartItem from '@features/CartScreen/CartItem';
import { useSelector } from 'react-redux';

export function CartCheckout({ isShowingCart, handleClick, item }) {
	const totalAmount = useSelector((state) => state.cart.totalAmount);
	return (
		<AnimatePresence>
			{isShowingCart && (
				<motion.div
					initial={{ x: 100 }}
					animate={{ x: 0 }}
					transition={{ type: 'tween', stiffness: 50 }}
					exit={{ x: 300 }}
					className="bg-white pl-8 pt-7 w-72 h-screen fixed inset-y-0 right-0 z-30"
				>
					<div className="flex flex-col">
						<div className="flex justify-between items-center pb-5 border-b border-slate-100 w-[87.3%]">
							<p className="flex items-center">Cart</p>
							<button
								className="flex pl-12 mt-5 text-lg "
								onClick={handleClick}
							>
								<MdClose />
							</button>
						</div>
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
							<>
								{item.map((item) => (
									<CartItem item={item} key={item.id} />
								))}
								<div className="flex items-center justify-between">
									<h6>
										Subtotal : <span>${totalAmount}</span>
									</h6>
									<Button>
										<Link to="/cart">Checkout</Link>
									</Button>
								</div>
							</>
						)}
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

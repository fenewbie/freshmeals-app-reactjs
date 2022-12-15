import { useSelector } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import CartItem from '@features/CartScreen/CartItem';

export function CartCheckout({ isShowingCart, handleClose, item }) {
	const totalAmount = useSelector((state) => state.cart.totalAmount);
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
								<CartItem
									item={item}
									key={item.id}
									className="py-4 border-b"
								/>
							))}
							<div className="font-bold py-5 border-y flex justify-between">
								<span className=" ">Subtotal:</span>
								<span className="text-greenBtn text-lg">${totalAmount}</span>
							</div>
							<div className="flex py-6">
								<Link
									className="w-1/2 mr-5 flex items-center justify-center"
									to="/cart"
								>
									View Cart
								</Link>
								<Link
									className="w-1/2 flex items-center justify-center"
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

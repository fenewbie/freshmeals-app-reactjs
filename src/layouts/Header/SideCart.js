import Button from '@components/UI/Button';
import ProductItem from '@features/ProductScreen/ProductItem';
import { AnimatePresence, motion } from 'framer-motion';
import { MdClose } from 'react-icons/md';

function SideCart({ isDisplay, handleClose }) {
	return (
		<>
			<AnimatePresence>
				{isDisplay && (
					<motion.div
						initial={{ x: '100%' }}
						animate={{ x: 0 }}
						transition={{ type: 'tween', stiffness: 50 }}
						exit={{ x: '200%' }}
						className="bg-white w-96 h-screen fixed inset-y-0 right-0 z-30 px-8 py-6 flex flex-col"
					>
						<header className="flex items-center justify-between border-b border-b-sectionBg pb-5">
							<span className="font-bold text-lg">Cart</span>
							<button
								className="text-2xl"
								onClick={handleClose}
							>
								<MdClose />
							</button>
						</header>
						<div className="my-5 flex-1 overflow-auto px-2">
							<ProductItem
								image="https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/product/1.png"
								title="Red Apple"
								price="10"
								discound="2"
								className="py-4 border-b"
							/>
							<ProductItem
								image="https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/product/1.png"
								title="Red Apple"
								price="10"
								discound="2"
								className="py-4 border-b"
							/>
							<ProductItem
								image="https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/product/1.png"
								title="Red Apple"
								price="10"
								discound="2"
								className="py-4"
							/>
						</div>
						<div className="font-bold py-5 border-y flex justify-between">
							<span className=" ">Subtotal:</span>
							<span className="text-greenBtn text-lg">$100</span>
						</div>
						<div className="flex py-6">
							<Button
								btn="card"
								className="w-1/2 mr-5 flex items-center justify-center"
								type="link"
								link="/cart"
							>
								View Cart
							</Button>
							<Button
								btn="card"
								className="w-1/2 flex items-center justify-center"
								type="link"
								link="/checkout"
							>
								Checkout
							</Button>
						</div>
						<span className="text-sm">
							Free shipping on All Orders Over $100!
						</span>
					</motion.div>
				)}
			</AnimatePresence>

			{isDisplay && (
				<div
					className={`fixed inset-0 bg-[rgba(0,0,0,0.4)] z-[29] transition-all duration-500 `}
				></div>
			)}
		</>
	);
}

export default SideCart;

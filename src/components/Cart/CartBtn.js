import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

function CartBtn({ onClick, totalQuantity }) {
	const { scrollY } = useScroll();
	const [show, setShow] = useState(false);
	useEffect(() => {
		const unsubscribe = scrollY.onChange((pos) => {
			pos > 100 ? setShow(true) : setShow(false);
		});
		return unsubscribe;
	}, [setShow, scrollY]);

	return (
		<AnimatePresence>
			{show && (
				<motion.button
					initial={{ y: '400%', opacity: 0 }}
					animate={{ y: '0%', opacity: 1 }}
					transition={{ duration: 1, type: 'spring', stiffness: 50 }}
					exit={{ y: '400%', opacity: 0 }}
					whileHover={{
						scale: 1.2,
						backgroundColor: '#80B500',
						color: '#fff',
					}}
					onClick={onClick}
					className="fixed bottom-36 text-2xl font-bold text-greenBtn bg-sectionBg right-8 h-12 w-12 text-center flex items-center justify-center shadow-[0px_2px_5px_1px_rgba(0,0,0,0.1)] rounded-full z-[999]"
				>
					<FaShoppingCart />
					<span className="absolute -top-2 right-0 text-red-500">
						{totalQuantity}
					</span>
				</motion.button>
			)}
		</AnimatePresence>
	);
}

export default CartBtn;

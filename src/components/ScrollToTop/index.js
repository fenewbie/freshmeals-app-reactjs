import { useEffect, useState } from 'react';
import { AnimatePresence, useScroll, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { HiArrowSmUp } from 'react-icons/hi';

function ScrollToTop() {
	const { scrollY } = useScroll();
	const [act, setAct] = useState(false);

	useEffect(() => {
		const unsubscribe = scrollY.onChange((pos) => {
			pos > 100 ? setAct(true) : setAct(false);
		});
		return unsubscribe;
	}, [setAct, scrollY]);

	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0});
	}, [pathname]);

	return (
		<AnimatePresence>
			{act && (
				<motion.button
					initial={{ y: '200%', opacity: 0 }}
					animate={{ y: '0%', opacity: 1 }}
					transition={{ duration: 1, type: 'spring', stiffness: 50 }}
					exit={{ y: '200%', opacity: 0 }}
					whileHover={{
						scale: 1.2,
						backgroundColor: '#80B500',
						color: '#fff',
					}}
					onClick={handleClick}
					className="fixed bottom-20 right-8 h-12 w-12 rounded-full bg-sectionBg text-4xl text-greenBtn  flex items-center justify-center cursor-pointer shadow-[0px_2px_5px_1px_rgba(0,0,0,0.1)] z-[999]"
				>
					<HiArrowSmUp />
				</motion.button>
			)}
		</AnimatePresence>
	);
}

export default ScrollToTop;

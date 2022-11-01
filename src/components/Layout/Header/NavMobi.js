import { BiSearch, BiUser, BiCartAlt, BiHeart } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import * as cs from '../../../constants/Constant';
import { Navigation } from './Navigation';
import SocialLink from '../../UI/SocialLink';

export function NavMobi({ isDisplay, handleClick }) {
	// const [isDisplay, setIsDisplay] = useState(true);
	const hideNavMobi = {
		opened: {
			x: 0,
			transition: {
				duration: 1.5,
				ease: 'easeInOut',
			},
		},
		closed: {
			x: -400,
			transition: {
				duration: 1.5,
				ease: 'easeInOut',
			},
		},
	};

	const fadeInNavMobi = {
		opened: {
			x: -400,
			transition: {
				delay: 0.15,
				duration: 1.5,
				ease: 'backOut',
			},
		},
		closed: {
			x: 0,
			transition: {
				delay: 0.15,
				duration: 1.5,
				ease: 'backOut',
			},
		},
	};
	return (
		<motion.div
			initial="closed"
			animate={isDisplay ? 'closed' : 'opened'}
			variants={hideNavMobi}
			className={`${
				!isDisplay
					? 'bg-white pl-8 pt-7 w-72 h-screen fixed inset-y-0 left-0 z-30'
					: 'hidden'
			}`}
		>
			<div className="flex justify-between items-center">
				<Link to="/" className="flex items-center">
					<img src={cs.logo02} alt="logo" className="h-12 -ml-5" />
					<span className="text-xl font-bold whitespace-nowrap uppercase -ml-5 mt-4 ">
						Freshmeals
					</span>
				</Link>
				<motion.button
					className="flex px-12 mt-5"
					onClick={handleClick}
					variants={fadeInNavMobi}
				>
					<MdClose />
				</motion.button>
			</div>
			<form className="py-6">
				<div className="relative">
					<input type="text" placeholder="Search..." className="w-56" />
					<div className="flex inset-y-0 absolute right-0 items-center pr-12">
						<BiSearch />
					</div>
				</div>
			</form>
			<Navigation className="flex-col gap-3 pb-8 border-b w-11/12" />
			<div className="flex flex-col gap-5 py-6 border-b w-11/12">
				<button className="hover:text-greenBtn inline-flex items-center gap-3">
					<BiUser className="outline-1" />
					My Account
				</button>
				<button className="hover:text-greenBtn inline-flex items-center gap-3">
					<BiHeart className="outline-1" />
					Wishlist
				</button>
				<button className="hover:text-greenBtn inline-flex items-center gap-3">
					<BiCartAlt className="outline-1" />
					Shopping cart
				</button>
			</div>
			<SocialLink />
		</motion.div>
	);
}

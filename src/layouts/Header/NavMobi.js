import { BiSearch, BiUser, BiCartAlt, BiHeart } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import * as cs from '@utils/constants';
import Navigation from '../../components/UI/Navbar';
import SocialLink from '@components/UI/SocialLink';
import Button from '@components/UI/Button';
import Search from 'layouts/Header/Search';
import SearchProducts from 'layouts/Header/Search';

export function NavMobi({ isDisplay, handleClick }) {
	return (
		<AnimatePresence>
			{isDisplay && (
				<motion.div
					initial={{ x: -200 }}
					animate={{ x: 0 }}
					transition={{ type: 'tween', stiffness: 50 }}
					exit={{ x: -300 }}
					className="bg-white pl-8 pt-7 w-72 h-screen fixed inset-y-0 left-0 z-30"
				>
					<div className="flex justify-between items-center pb-5 border-b border-slate-100 w-[87.3%]">
						<Link
							to="/"
							className="flex items-center"
						>
							<img
								src={cs.logo02}
								alt="logo"
								className="h-12 -ml-5"
							/>
							<span className="text-xl font-bold whitespace-nowrap uppercase -ml-5 mt-4 ">
								Freshmeals
							</span>
						</Link>
						<button
							className="flex pl-12 mt-5 text-lg "
							onClick={handleClick}
						>
							<MdClose />
						</button>
					</div>
					{/* <form className="py-6">
						<div className="relative">
							<input
								type="text"
								placeholder="Search..."
								className="w-56 border border-slate-200 text-sm py-3"
							/>
							<div className="flex inset-y-0 absolute right-0 items-center pr-12">
								<BiSearch />
							</div>
						</div>
					</form> */}
					<SearchProducts />
					<Navigation className="flex-col pb-8 border-b uppercase border-slate-100 w-[87.3%]" />
					<div className="flex flex-col gap-5 py-6 border-b border-slate-100 w-[87.3%]">
						<Button className="hover:text-greenBtn inline-flex items-center gap-3">
							<BiUser className="outline-1" />
							My Account
						</Button>
						<Button className="hover:text-greenBtn inline-flex items-center gap-3">
							<BiHeart className="outline-1" />
							Wishlist
						</Button>
						<Button className="hover:text-greenBtn inline-flex items-center gap-3">
							<BiCartAlt className="outline-1" />
							Shopping cart
						</Button>
					</div>
					<SocialLink />
				</motion.div>
			)}
		</AnimatePresence>
	);
}

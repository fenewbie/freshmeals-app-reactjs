import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BiUser, BiCartAlt, BiHeart } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';

import Navigation from '@components/UI/Navbar';
import SocialLink from '@components/UI/SocialLink';
import SearchProducts from 'layouts/Header/Search';
import Modal from '@components/UI/Modal';
import * as cs from '@utils/constants';

export function NavMobi({ handleClose }) {
	return (
		<Modal className="h-full w-full" handleClose={handleClose}>
			<motion.div
				initial={{ x: '-100%' }}
				animate={{ x: 0 }}
				transition={{ type: 'tween', stiffness: 50 }}
				exit={{
					x: '-100%',
				}}
				className="scroll-bar bg-white pl-8 pt-7 w-[400px] h-screen fixed inset-y-0 left-0 overflow-y-auto overflow-x-hidden"
			>
				<div className="flex justify-between items-center pb-5 border-b border-slate-100 w-[87.3%]">
					<Link to="/" className="flex items-center">
						<img src={cs.logo02} alt="logo" className="h-12 -ml-5" />
						<span className="text-xl font-bold whitespace-nowrap uppercase -ml-5 mt-4 ">
							Freshmeals
						</span>
					</Link>
					<button className="flex pl-12 mt-5 text-lg " onClick={handleClose}>
						<MdClose />
					</button>
				</div>
				<div className="mr-5">
					<SearchProducts isMobi />
				</div>
				<div className="h-full pb-44 mt-5">
					<Navigation className="flex flex-col pb-8 border-b uppercase border-slate-100 w-[87.3%] " />
					<div className="flex flex-col gap-5 py-6 border-b border-slate-100 w-[87.3%]">
						<Link
							className="hover:text-greenBtn inline-flex items-center gap-3"
							to="/user-profile"
						>
							<BiUser className="outline-1" />
							My Account
						</Link>
						<Link
							className="hover:text-greenBtn inline-flex items-center gap-3"
							to="/coming-soon"
						>
							<BiHeart className="outline-1" />
							Wishlist
						</Link>
						<Link
							className="hover:text-greenBtn inline-flex items-center gap-3"
							to="/cart"
						>
							<BiCartAlt className="outline-1" />
							Shopping cart
						</Link>
					</div>
					<SocialLink />
				</div>
			</motion.div>
		</Modal>
	);
}

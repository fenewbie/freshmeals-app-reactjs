import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import NavbarLink from './NavLink';
import { BiSearch, BiUser, BiCartAlt, BiMenu, BiHeart } from 'react-icons/bi';
import {Dropdown, Button, Modal } from 'flowbite-react';
import Banner from './Banner';
import SocialLink from '../../UI/SocialLink';
import { navbarList, userList } from '../../../constants/route';
import * as cs from '../../../constants/Constant';

import './nav.css';

const Header = () => {
	const [isDisplay, setIsDisplay] = useState(false);
	const location = useLocation();
	const isHomePage = location.pathname === '/';

	const handleClick = (e) => {
		e.preventDefault();

		setIsDisplay(!isDisplay);
	};

	return (
		<header
			className={`relative flex justify-center ${
				isHomePage
					? 'bg-transparent'
					: 'bg-gradient-to-r from-slate-800 to-slate-700'
			}`}
		>
			{isHomePage && <Banner />}
			<div
				className={`z-10 ${
					isHomePage ? 'absolute' : ''
				} mx-auto py-6 flex flex-wrap justify-center items-center md:justify-between md:w-[768px] lg:w-[1200px] ease-in-out duration-200`}
			>
				<div className="bg-slate-900 rounded-md p-3">
					<nav className="pb-6">
						<div className="flex items-center">
							<Link to="/">
								<img src={cs.logo} alt="logo" className="h-12" />
							</Link>
						</div>
					</nav>
					<nav className="flex justify-between items-center mx-auto gap-5">
						<Link to="#">
							<button className=" hidden lg:inline-flex text-white bg-greenBtn hover:bg-[#699403] focus:ring-4 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 ">
								GET A QUOTE
							</button>
						</Link>
						<Link to="#">
							<button className="p-3 bg-white rounded-full hover:bg-[#80B500] focus:ring-4">
								<BiSearch />
							</button>
						</Link>
						<Dropdown
							arrowIcon={false}
							label={<BiUser />}
							color={'light'}
							size={'40px'}
							id="userBtn"
						>
							{userList.map((item) => (
								<Dropdown.Item key={item.id}>{item.title}</Dropdown.Item>
							))}
						</Dropdown>

						<Link to="#">
							<button className="p-3 bg-white rounded-full hover:bg-greenBtn focus:ring-4">
								<BiCartAlt />
							</button>
						</Link>
						<Button className="bg-white p-3 rounded-full" onClick={handleClick}>
							<BiMenu />
						</Button>
						<Modal
							show={false}
							onClose={() => setIsDisplay(isDisplay)}
							className="-ml-4 pr-10"
						>
							<Modal.Header>
								<Link to="/">
									<img src={cs.logo} alt="logo" className="h-12" />
								</Link>
								<form className="py-6">
									<div className="relative">
										<input type="text" placeholder="Search..." />
										<div className="flex inset-y-0 absolute right-0 items-center pr-2">
											<BiSearch />
										</div>
									</div>
								</form>
								<ul>
									{navbarList.length > 0 &&
										navbarList.map((navItem) => (
											<li
												key={navItem.id}
												className="flex items-center space-x-1"
											>
												<NavbarLink
													to={navItem.url}
													title={navItem.title}
													className=" text-zinc-900 uppercase"
												/>
											</li>
										))}
								</ul>
							</Modal.Header>
							<Modal.Body className="flex flex-col">
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
							</Modal.Body>
							<hr />
							<SocialLink />
						</Modal>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;

import { useLocation, Link } from 'react-router-dom';
import NavbarLink from './NavLink';
import { BiSearch, BiUser, BiCartAlt } from 'react-icons/bi';
import { Navbar, Dropdown, Button } from 'flowbite-react';
import Banner from './Banner';
import { navbarList, userList } from '../../../constants/route';
import * as cs from '../../../constants/Constant';
import { useState } from 'react';

const Header = () => {
	const [isDisplay, setIsDisplay] = useState(false);
	const location = useLocation();
	const isHomePage = location.pathname === '/';

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
				} mx-auto py-6 flex justify-center items-center md:justify-between md:w-[768px] lg:w-[1200px] ease-in-out duration-200`}
			>
				<div className="bg-slate-900 rounded-md p-3">
					<nav>
						<div className="flex items-center">
							<Link to="/">
								<img src={cs.logo} alt="logo" className="h-12" />
							</Link>
						</div>
					</nav>
					<nav className="flex flex-wrap justify-between items-center mx-auto">
						<Link to="#">
							<button className="text-white bg-[#80B500] hover:bg-[#699403] focus:ring-4 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hidden lg:inline-flex ">
								GET A QUOTE
							</button>
						</Link>
						<Link to="#">
							<button className="p-3 bg-white rounded-full hover:bg-[#80B500] focus:ring-4">
								<BiSearch />
							</button>
						</Link>
						<div className="flex items-center">
							<button
								onClick={() => setIsDisplay(!isDisplay)}
								className=" flex p-3 bg-white rounded-full hover:bg-[#80B500] focus:ring-4"
							>
								<BiUser />
								{isDisplay ? (
									<div className="my-4 list-none bg-white rounded shadow">
										<ul className="py-1" aria-labelledby="user-menu-button">
											{userList.map((item) => (
												<li key={item.id} className="">
													<NavbarLink
														to={item.url}
														title={item.title}
														className="block py-2 px-4 text-emerald-800"
													/>
												</li>
											))}
										</ul>
									</div>
								) : (
									''
								)}
							</button>
						</div>
						<Link to="#">
							<button className="p-3 bg-white rounded-full hover:bg-[#80B500] focus:ring-4">
								<BiCartAlt />
							</button>
						</Link>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;

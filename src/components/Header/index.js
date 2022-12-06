import { NavMobi } from './NavMobi';
import  Navigation  from './Navigation';
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { BiSearch, BiUser, BiCartAlt, BiMenu } from 'react-icons/bi';

import Button from '../UI/Button';
import Banner from './Banner';
import { userList } from '../../constants/route';
import * as cs from '../../constants/Constant';
import Dropdown from '../UI/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../redux/ui/ui-slice';

const Header = () => {
	const [showDropdown, setShowDropdown] = useState(false);

	const showNavMobi = useSelector((state) => state.ui.isDisplay);
	const dispatch = useDispatch();

	const location = useLocation();
	const isHomePage = location.pathname === '/';

	const handleClick = () => {
		dispatch(uiActions.toggleNavMobi());
	};

	return (
		<header className="relative flex justify-center bg-transparent">
			{isHomePage && <Banner />}
			<div
				className={`z-10 ${
					isHomePage ? 'absolute' : ''
				} mx-auto py-6 flex flex-wrap justify-center items-center md:justify-between md:w-[768px] lg:w-[1200px] ease-in-out duration-200`}
			>
				<div className="container flex flex-col md:flex-row lg:flex-row justify-between md:justify-around items-center mx-auto">
					<nav className="pb-6">
						<div className="flex items-center justify-center">
							<Link to="/">
								<img src={cs.logo01} alt="logo" className="h-12" />
							</Link>
						</div>
					</nav>
					<nav className="flex justify-end items-center gap-8 relative">
						<div className="hidden lg:block lg:order-1">
							<Navigation className="flex flex-row gap-6 text-white capitalize font-bold text-xl font-raj" />
						</div>

						<div className="flex flex-wrap gap-6 order-2">
							<Button className=" hidden lg:inline-flex text-white bg-greenBtn hover:bg-[#699403] focus:ring-4 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 font-raj">
								GET A QUOTE
							</Button>
							<div className="flex gap-3">
								<Button className="p-3 bg-white rounded-full hover:bg-[#80B500] focus:ring-4">
									<BiSearch />
								</Button>
								<Button
									className="p-3 bg-white rounded-full hover:bg-[#80B500] focus:ring-4 inline-flex items-center"
									onClick={() => setShowDropdown(!showDropdown)}
								>
									<BiUser />
								</Button>
								<Dropdown
									className="absolute top-10 right-12 w-36"
									showDropdown={!showDropdown}
									items={userList}
								></Dropdown>

								<Link to='cart' className="p-3 bg-white rounded-full hover:bg-greenBtn focus:ring-4">
									<BiCartAlt />
								</Link>

								<Button
									className="bg-white p-3 rounded-full lg:hidden"
									onClick={handleClick}
								>
									<span
										className={`${
											showNavMobi
												? 'fixed inset-0 w-full h-full bg-black opacity-40'
												: ''
										}`}
									></span>
									<BiMenu />
								</Button>
								<NavMobi isDisplay={showNavMobi} handleClick={handleClick} />
							</div>
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;

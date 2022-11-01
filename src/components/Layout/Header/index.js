import {NavMobi} from './NavMobi'
import { Navigation } from './Navigation';
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { BiSearch, BiUser, BiCartAlt, BiMenu } from 'react-icons/bi';

import { Dropdown} from 'flowbite-react';


import Banner from './Banner';
import { userList } from '../../../constants/route';
import * as cs from '../../../constants/Constant';

import './nav.css';

const Header = () => {
	const [isDisplay, setIsDisplay] = useState(true);
	const location = useLocation();
	const isHomePage = location.pathname === '/';

	const handleClick = () => {
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
				<div className="container flex flex-col md:flex-row lg:flex-row justify-between md:justify-around items-center mx-auto ">
					<nav className="pb-6">
						<div className="flex items-center justify-center">
							<Link to="/">
								<img src={cs.logo01} alt="logo" className="h-12" />
							</Link>
						</div>
					</nav>
					<nav className="flex justify-end items-center gap-8 relative">
						<div className="hidden lg:block lg:order-1">
							<Navigation className="flex-row gap-6 capitalize font-bold" />
						</div>

						<div className="flex flex-wrap gap-6 order-2">
							<Link to="#">
								<button className=" hidden lg:inline-flex text-white bg-greenBtn hover:bg-[#699403] focus:ring-4 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 ">
									GET A QUOTE
								</button>
							</Link>
							<div className="flex gap-3">
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
								<button
									className="bg-white p-3 rounded-full lg:hidden"
									onClick={handleClick}
								>
									<BiMenu />
								</button>
							</div>
						</div>

						<NavMobi   isDisplay={isDisplay} handleClick={handleClick}  />
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;

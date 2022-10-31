import { useLocation, Link } from 'react-router-dom';
import NavbarLink from './NavLink';
import { BiSearch, BiUser, BiCartAlt } from 'react-icons/bi';
import { Navbar, Dropdown, Button } from 'flowbite-react';
import Banner from './Banner';
import { navbarList } from '../../../constants/route';
import * as cs from '../../../constants/Constant';

const Header = () => {
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
				<Navbar fluid={true} rounded="true" className="bg-current">
					<Navbar.Brand href="#">
						<img src={cs.logo} className="mr-3 h-6 sm:h-9" alt="logo" />
					</Navbar.Brand>
					<div className="flex md:order-2">
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
						<Link to="#">
							<button className="p-3 bg-white rounded-full hover:bg-[#80B500] focus:ring-4">
								<Dropdown
									arrowIcon={false}
									inline={true}
									label={<BiUser alt="User settings" rounded={true} />}
								>
									<Dropdown.Item>Sign In</Dropdown.Item>
									<Dropdown.Item>Register</Dropdown.Item>
									<Dropdown.Item>My Account</Dropdown.Item>
									<Dropdown.Item>Wishlist</Dropdown.Item>
								</Dropdown>
							</button>
						</Link>
						<Link to="#">
							<button className="p-3 bg-white rounded-full hover:bg-[#80B500] focus:ring-4">
								<BiCartAlt />
							</button>
						</Link>

						<Navbar.Toggle />
					</div>
					<Navbar.Collapse>
						{navbarList.length > 0 &&
							navbarList.map((navItem) => (
                
								<Navbar.Link
									href={navItem.url}
									active={navItem.url === '/' ? true : false}
									key={navItem.id}
									className="capitalize text-white border-b-0 font-bold"
								>
									{navItem.title}
								</Navbar.Link>
							))}
					</Navbar.Collapse>
				</Navbar>
			</div>
		</header>
	);
};

export default Header;

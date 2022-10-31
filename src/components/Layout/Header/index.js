import { useLocation, Link } from 'react-router-dom';
import NavbarLink from './NavLink';
import { BiSearch, BiUser, BiCartAlt, BiMenu } from 'react-icons/bi';
import { Navbar, Dropdown, Button, Modal } from 'flowbite-react';
import Banner from './Banner';
import { navbarList, userList } from '../../../constants/route';
import * as cs from '../../../constants/Constant';
import { useState } from 'react';

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
					<nav className="flex justify-between items-center mx-auto">
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
							pill={true}
						>
							{navbarList[4].children.map((item) => (
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
						<Modal show={false}>
							<Modal.Header>
								<Link to="/">
									<img src={cs.logo} alt="logo" className="h-12" />
								</Link>
								<form>
									<div className="relative">
										<div>
											<input type="text" />
											<BiSearch />
										</div>
									</div>
								</form>
							</Modal.Header>
						</Modal>

						{/* <div
							className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
								!isDisplay ? 'block' : 'hidden'
							}`}
						>
							<ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
								{navbarList.length > 0 &&
									navbarList.map((navItem) => (
										<li
											key={navItem.id}
											className="flex items-center space-x-1"
										>
											<NavbarLink to={navItem.url} title={navItem.title} />
										</li>
									))}
							</ul>
						</div> */}
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;

{
	/* <ul className="flex flex-col sm:space-x-2 md:space-x-4 lg:space-x-6">
	{isDisplay &&
		navbarList.length > 0 &&
		navbarList.map((navItem) => (
			<li key={navItem.id} className="flex items-center space-x-1">
				<NavbarLink to={navItem.url} title={navItem.title} />
			</li>
		))}
</ul>; */
}

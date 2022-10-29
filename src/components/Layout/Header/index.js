import NavbarLink from './NavLink';
import {navbarList} from '../../../constants/route';

const Header = () => {
	return (
		<header className="border border-red-500 w-screen p-1">
			<div
				className={`bg-yellow-200 flex justify-center md:justify-between md:w-[768px] lg:w-[1200px] mx-auto ease-in-out duration-200`}
			>
				<div className="hidden md:inline-block lg:inline-block">
					Brand Header
				</div>
				<nav>
					<ul className="flex space-x-2">
						{navbarList.length > 0 &&
							navbarList.map((navItem) => (
								<li key={navItem.id}>
									<NavbarLink to={navItem.url} title={navItem.title} />
								</li>
							))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;

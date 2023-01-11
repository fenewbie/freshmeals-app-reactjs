import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { MdDoubleArrow } from 'react-icons/md';

const Navlink = ({ type, className, items }) => {
	switch (type) {
		case 'footer':
			return (
				<ul className="space-y-4">
					{items.map((link) => (
						<li key={link.id}>
							<NavLink
								to={link.url}
								className="group inline-flex items-center capitalize hover:translate-x-4 hover:text-[#80B500] hover:font-semibold hover:ease-in-out hover:duration-300"
							>
								<MdDoubleArrow className="-translate-x-full invisible w-0 group-hover:visible group-hover:w-6 group-hover:-translate-x-1 group-hover:ease-in-out group-hover:duration-300" />
								<span>{link.title}</span>
							</NavLink>
						</li>
					))}
				</ul>
			);
		default:
			return (
				<div className={`${className}`}>
					{items?.map((navItem) => (
						<NavLink
							key={navItem.id}
							to={navItem.url}
							className={({ isActive }) =>
								`max-lg:my-2 max-lg:py-1 max-lg:px-2 border-b-2 ${
									isActive
										? 'border-greenBtn text-greenBtn'
										: 'border-transparent'
								}`
							}
							end
						>
							{navItem.title}
						</NavLink>
					))}
				</div>
			);
	}
};

export default memo(Navlink);

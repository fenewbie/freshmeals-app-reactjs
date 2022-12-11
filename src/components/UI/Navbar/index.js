import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { navbarList } from '@utils/constants';

const Navigation = ({ className }) => {
	return (
		<div className={`${className}`}>
			{navbarList?.map((navItem) => (
				<NavLink
					key={navItem.id}
					to={navItem.url}
					className={({ isActive }) =>
						isActive ? 'border-b-2 border-green-600' : 'border-b-0'
					}
					end
				>
					{navItem.title}
				</NavLink>
			))}
		</div>
	);
};

export default memo(Navigation);
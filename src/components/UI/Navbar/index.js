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
};

export default memo(Navigation);

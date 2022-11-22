import { NavLink } from 'react-router-dom';
import { navbarList } from '../../constants/route';

export function Navigation({ className }) {
	return (
		<ul className={`${className}`}>
			{navbarList.length > 0 &&
				navbarList.map((navItem) => (
					<li key={navItem.id}>
						<NavLink
							to={navItem.url}
							className={(navActive) =>
								navActive.isActive ? 'border-b-2 border-green-600' : ''
							}
						>
							{navItem.title}
						</NavLink>
					</li>
				))}
		</ul>
	);
}

import { navbarList} from '../../../constants/route';
import NavbarLink from './NavbarLink';

export function Navigation({ navItem, className}) {
	return (
		<ul className={`flex ${className}`}>
			{navbarList.length > 0 &&
				navbarList.map((navItem) => (
					<li key={navItem.id}>
						<NavbarLink
							to={navItem.url}
							title={navItem.title}
						/>
					</li>
				))}
		</ul>
	);
}

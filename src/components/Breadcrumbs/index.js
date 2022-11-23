import { Link,useLocation } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { navbarList } from '../../constants/route';

function Breadcrumbs() {
	const breadcrumbs = useBreadcrumbs(navbarList);
	const location = useLocation()

	console.log("breadcrumbs", breadcrumbs);
	return (
		<nav>
			{breadcrumbs.map(({ match, title }) => (
				<Link
					key={match.url}
					to={match.url}
					className={
						match.pathname === location.pathname
							? 'text-[#80B500]'
							: 'text-[#8CB2B2]'
					}
				>
					{title} /
				</Link>
			))}
		</nav>
	);
}
export default Breadcrumbs;


// function Breadcrumb({ title }) {
// 	const location = useLocation();
// 	return (
// 		<nav className="">
// 			<Link to="/" className="text-[#8CB2B2]">
// 				Home
// 			</Link>
// 			<span className="h-10 w-10 text-[#8CB2B2] mx-2">Hong</span>
// 			{navbarList.map((item) => (
// 				<>
// 					<Link
// 						to={item.url}
//                         key={item.url}
// 						className={
// 							location.pathname.startsWith(`/${item.url}`)
// 								? 'text-[#8CB2B2]'
// 								: 'text-[#8CB2B2]'
// 						}
// 					>
// 						{item.title}
// 					</Link>
// 				</>
// 			))}
// 		</nav>
// 	);
// }

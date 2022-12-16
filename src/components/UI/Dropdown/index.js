import { Link } from "react-router-dom";

const Dropdown = ({ showDropdown, items, className }) => {
	return (
		<div
			className={`${
				!showDropdown ? 'z-10 bg-white rounded' : 'hidden'
			} ${className}`}
		>
			<ul className="py-1 ">
				{items.map((item) => (
					<li key={item.id} className="block py-2 px-4 text-base">
						<Link to={item.to}>{item.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Dropdown;

import { Link } from 'react-router-dom';

const Dropdown = ({ items, handleClose }) => {
	return (
		<div className="z-10 bg-white rounded absolute top-10 right-12 w-36 before:content-['']  before:absolute before:-top-5 before:right-0 before:h-10 before:w-14 before:bg-transparent">
			<ul className="py-1 ">
				{items.map((item) => (
					<li
						key={item.id}
						className="block py-2 px-4 transition-all
							hover:text-green-600 cursor-pointer"
					>
						<Link to={item.url} onClick={handleClose}>
							{item.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Dropdown;

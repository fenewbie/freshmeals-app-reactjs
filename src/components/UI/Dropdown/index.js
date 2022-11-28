const Dropdown = ({ showDropdown, setShowDropdown, items, className }) => {
	return (
		<div
			className={`${
				!showDropdown ? 'z-10 bg-white rounded' : 'hidden'
			} ${className}`}
		>
			<ul className="py-1 ">
				{items.map((item) => (
					<li key={item.id} className="block py-2 px-4">
						{item.title}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Dropdown;

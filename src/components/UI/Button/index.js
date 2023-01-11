import { Link } from 'react-router-dom';

const Button = ({
	children,
	className,
	type,
	link = '/',
	onClick,
	btn,
	onMouseOver,
}) => {
	let classType;
	let props = {};

	switch (btn) {
		case 'card':
			classType =
				'px-4 h-[58px] rounded-md bg-greenBtn hover:bg-[#6a9700] text-white max-md:w-full max-md:mt-3 flex items-center justify-center';
			break;
		case 'tag':
			classType =
				'text-sm font-medium py-1 px-4 rounded-full border border-greenBtn inline-block text-center bg-transparent ml-2 duration-300 hover:text-white hover:bg-greenBtn shadow-md';
			break;
		case 'tag2':
			classType =
				'text-sm rounded mb-2 py-2 px-6  uppercase bg-sectionBg hover:bg-greenBtn hover:text-white ';
			break;
		case 'cancel':
			classType =
				'bg-red-600 hover:bg-red-800 mt-3  px-4 h-[58px] rounded-md text-white w-full max-md:mt-3';
			props = { type: 'button' };
			break;
		default:
			classType = '';
			break;
	}

	return (
		<>
			{type === 'link' ? (
				<Link
					to={link}
					className={`transition-all ${classType} ${className}`}
					{...props}
				>
					{children}
				</Link>
			) : (
				<button
					type={type}
					onClick={onClick}
					onMouseOver={onMouseOver}
					className={`transition-all ${classType} ${className}`}
					{...props}
				>
					{children}
				</button>
			)}
		</>
	);
};

export default Button;

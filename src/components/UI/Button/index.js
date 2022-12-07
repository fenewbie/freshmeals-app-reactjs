import { Link } from 'react-router-dom';

const Button = ({
	children,
	className,
	type,
	link = '/',
	onClick,
	reload = true,
	btn,
}) => {
	let classType;

	switch (btn) {
		case 'card':
			classType =
				'px-4 h-[58px] rounded-md bg-greenBtn hover:bg-[#6a9700] text-white max-md:w-full max-md:mt-3';
			break;
		case 'tag':
			classType =
				'text-sm font-medium py-1 px-4 rounded-full border border-greenBtn inline-block text-center bg-transparent ml-2 duration-300 hover:text-white hover:bg-greenBtn shadow-md';
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
				>
					{children}
				</Link>
			) : (
				<button
					type={type}
					onClick={onClick}
					className={`transition-all ${classType} ${className}`}
				>
					{children}
				</button>
			)}
		</>
	);
};

export default Button;

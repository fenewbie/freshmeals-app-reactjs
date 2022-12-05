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

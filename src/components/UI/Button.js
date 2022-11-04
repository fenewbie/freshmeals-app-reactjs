import { Link } from 'react-router-dom';

const Button = ({
	children,
	className,
	type,
	link = '/',
	onClick,
	reload = true,
}) => {
	return (
		<>
			{type === 'link' ? (
				<Link to={link} className={`${className}`}>
					{children}
				</Link>
			) : (
				<button onClick={onClick} className={`${className}`}>
					{children}
				</button>
			)}
		</>
	);
};

export default Button;

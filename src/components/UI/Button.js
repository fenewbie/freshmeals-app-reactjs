import { Link } from 'react-router-dom';

const Button = ({
	children,
	className,
	type,
	link = '/',
	onClick,
	reload = true,
	btn
}) => {
	switch(btn) {
		case 'card':
			return (
				<>
					{type === 'link' ? (
						<Link
							to={link}
							className={
								`group relative  mt-14 flex items-center justify-center rounded-lg w-full h-10   md:w-[150px] lg:h-14 md:h-12 bg-[#80B500]  hover:text-gray-900 hover:bg-black focus:outline-none focus:z-10 focus:ring focus:ring-blue-100 after:content-[''] after:absolute after:rounded-lg after:top-0 after:left-0 after:bg-white after:w-[0%] after:h-full after:transition-all after:duration-[400ms] after:ease-in-out hover:after:w-full hover:after:border hover:after:border-gray-900 ${className}`
							}
						
						>
							<span className="group-hover:text-neutral-700 text-sm font-bold text-white uppercase relative z-10 m-auto">
								{children}
							</span>
						</Link>
					) : (
						<button
							className={
								`group relative  mt-14 flex items-center justify-center rounded-lg w-full h-10  md:w-[150px] lg:h-14 md:h-12 bg-[#80B500]  hover:text-gray-900 hover:bg-black focus:outline-none focus:z-10 focus:ring focus:ring-blue-100 after:content-[''] after:absolute after:rounded-lg after:top-0 after:left-0 after:bg-white after:w-[0%] after:h-full after:transition-all after:duration-[400ms] after:ease-in-out hover:after:w-full hover:after:border hover:after:border-gray-900 ${className}`
							}
						>
							<span className="group-hover:text-neutral-700 text-sm font-bold text-white uppercase relative z-10 m-auto">
								{children}
							</span>
						</button>
					)}
				</>
			)
		default:
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
	}
	
};

export default Button;

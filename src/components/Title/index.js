import { memo } from 'react';

const Title = ({ title, subtitle, center = true }) => {
	console.log(title, center);
	return (
		<>
			{subtitle && (
				<h6 className="font-bold text-greenBtn capitalize mb-3 font-raj">
					{subtitle}
				</h6>
			)}
			{title && (
				<h1
					className={`text-2xl lg:text-5xl min-[600px]:text-3xl md:text-4xl font-bold capitalize mb-12 font-raj ${
						center ? 'text-center' : ''
					}`}
				>
					{title}
				</h1>
			)}
		</>
	);
};

export default memo(Title);

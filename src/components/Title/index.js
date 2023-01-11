import { memo } from 'react';

const Title = ({ title, subtitle, center = true }) => {
	return (
		<div className={`${center && 'text-center'}`}>
			{subtitle && (
				<h6 className="font-bold text-greenBtn capitalize mb-4 font-raj">
					{subtitle}
				</h6>
			)}
			{title && (
				<h1
					className={`lg:text-xl min-[600px]:text-xl md:text-xl font-bold capitalize mb-12 font-raj`}
				>
					{title}
				</h1>
			)}
		</div>
	);
};

export default memo(Title);

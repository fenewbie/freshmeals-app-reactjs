import { BsFilterLeft } from 'react-icons/bs';

function CommonSection({ title, children, icon, className }) {
	return (
		<div
			className={`border-2 rounded  py-8 md:px-8 px-4 my-8 ${className}`}
		>
			<div className="flex items-center mb-8">
				{icon ? (
					icon
				) : (
					<BsFilterLeft className="text-2xl mr-4 text-greenBtn" />
				)}
				<h3 className="font-bold text-lg">{title}</h3>
			</div>
			<div>{children}</div>
		</div>
	);
}

export default CommonSection;

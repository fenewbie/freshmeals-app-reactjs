import {BsFilterLeft} from 'react-icons/bs';

function CommonSection({title, chidlren, icon}) {
    return (
		<div className="border-2 rounded  py-8 px-10 mt-8">
			<div className="flex items-center mb-8">
				{icon ? (
					icon
				) : (
					<BsFilterLeft className="text-2xl mr-4 text-greenBtn" />
				)}
				<h3 className="font-bold text-lg">{title}</h3>
			</div>
			{chidlren}
		</div>
	);
}

export default CommonSection;
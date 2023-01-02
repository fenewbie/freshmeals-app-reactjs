import { Link } from 'react-router-dom';

function ServiceCard({ title, desc, iconImg }) {
	return (
		<div className="bg-white shadow-card md:px-8 px-6 py-10 rounded-md min-h-[270px]">
			<div className="flex items-center">
				<img
					src={iconImg}
					alt={title}
				/>
				<Link
					className="lg:text-2xl md:text-xl text-lg font-bold ml-6 hover:text-greenBtn transition-all"
					to="/Our-Service"
				>
					{title}
				</Link>
			</div>
			<p className="mt-5">{desc}</p>
		</div>
	);
}

export default ServiceCard;

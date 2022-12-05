import { Link } from 'react-router-dom';

function ServiceCard({ title, desc, iconImg }) {
	return (
		<div className="bg-white shadow-card px-8 py-10 rounded-md">
			<div className="flex items-center">
				<img
					src={iconImg}
					alt={title}
				/>
				<Link
					className="text-2xl font-bold ml-6 hover:text-greenBtn transition-all"
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

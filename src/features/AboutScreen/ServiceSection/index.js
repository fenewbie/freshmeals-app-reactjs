import Title from '../../../components/Title';
import useFirestore from '../../../hooks/useFirestore';
import { Link } from 'react-router-dom';

function ServiceSection() {
	const { docs } = useFirestore('features/1/feature-serivce');
	return (
		<div className="bg-sectionBg py-[120px] px-4">
			<Title title="Why Choose Us" />
			<div className="grid lg:grid-cols-3 gap-8 md:grid-cols-4 grid-cols-1 ">
				{docs.map((item, index) => (
					<div
						key={item.index}
						className={`${
							index === 2 && 'md:col-start-2'
						} md:col-span-2 lg:col-span-1 `}
					>
						<div className="bg-white shadow-card px-8 py-10 rounded-md">
							<div className="flex items-center">
								<img src={item.img} alt={item.title} />
								<Link
									className="text-2xl font-bold ml-6 hover:text-greenBtn transition-all"
									to="/Our-Service"
								>
									{item.title}
								</Link>
							</div>
							<p className="mt-5">{item.desc}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default ServiceSection;


import ServiceCard from './ServiceCard';
import Title from '../../../components/Title';
import useFirestore from '../../../hooks/useFirestore';

function ServiceSection() {
	const { docs } = useFirestore('features/1/feature-serivce');
	return (
		<div className="bg-sectionBg py-[120px] px-4">
			<Title title="Why Choose Us" />
			<div className="grid lg:grid-cols-3 gap-8 md:grid-cols-4 grid-cols-1 ">
				{docs.map((item, index) => (
					<div
						key={item.id}
						className={`${
							index === 2 && 'md:col-start-2'
						} md:col-span-2 lg:col-span-1 `}
					>
						<ServiceCard
							title={item.title}
							desc={item.desc}
							iconImg={item.icon}
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default ServiceSection;


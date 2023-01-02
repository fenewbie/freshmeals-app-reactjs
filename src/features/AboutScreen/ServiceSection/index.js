import {  useRouteLoaderData } from 'react-router-dom';

import Title from '@components/Title';
import ServiceCard from '@components/About/ServiceCard';
import Container from '@components/UI/Container';

function ServiceSection() {
	const { services } = useRouteLoaderData('root');
	return (
		<div className="bg-sectionBg">
			<Container>
				<Title title="Why Choose Us" />
				<div className="grid lg:grid-cols-3 gap-8 md:grid-cols-4 grid-cols-1 ">
					{services.map((item, index) => (
						<div
							key={index}
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
			</Container>
		</div>
	);
}

export default ServiceSection;

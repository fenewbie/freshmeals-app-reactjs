import {  Await, useRouteLoaderData } from 'react-router-dom';
import { Suspense } from 'react';

import Title from '@components/Title';
import ServiceCard from '@components/About/ServiceCard';

function ServiceSection() {
	const { services } = useRouteLoaderData('root');
	return (
		<div className="bg-sectionBg">
			<div className="container py-28">
				<Title title="Why Choose Us" />
				<Suspense>
					<Await resolve={services}>
						{(data) => (
							<div className="grid lg:grid-cols-3 gap-8 md:grid-cols-4 grid-cols-1 ">
								{data.map((item, index) => (
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
						)}
					</Await>
				</Suspense>
			</div>
		</div>
	);
}

export default ServiceSection;

import { Await, useRouteLoaderData } from 'react-router-dom';
import { Suspense } from 'react';

import Title from '@components/Title';
import MemberCard from '@components/About/MemberCard';

function TeamMemberSection() {
	const { teams } = useRouteLoaderData('root');
	return (
		<div className="container py-28">
			<Title title="Team Member" />
			<Suspense>
				<Await resolve={teams}>
					{(data) => (
						<div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
							{data.map((member, index) => (
								<div
									key={member.id}
									className={`${
										index === 3
											? 'lg:col-start-2 xl:col-start-auto'
											: ''
									}`}
								>
									<MemberCard {...member} />
								</div>
							))}
						</div>
					)}
				</Await>
			</Suspense>
		</div>
	);
}

export default TeamMemberSection;

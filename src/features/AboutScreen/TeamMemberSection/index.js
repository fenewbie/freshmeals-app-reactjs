import { useRouteLoaderData } from 'react-router-dom';

import Title from '@components/Title';
import MemberCard from '@components/About/MemberCard';

function TeamMemberSection() {
	const { teams } = useRouteLoaderData('root');
	return (
		<div className="container py-28">
			<Title title="Team Member" />
			<div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
				{teams.map((member, index) => (
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
		</div>
	);
}

export default TeamMemberSection;
import { useLoaderData } from 'react-router-dom';

import Title from '@components/Title';
import MemberCard from '@components/About/MemberCard';

function TeamMemberSection() {
	const { teams } = useLoaderData();
	return (
		<div className="py-[120px] px-4">
			<Title title="Team Member" />
			<div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
				{teams.map((member) => (
					<div key={member.id}>
						<MemberCard {...member} />
					</div>
				))}
			</div>
		</div>
	);
}

export default TeamMemberSection;

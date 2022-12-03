import Title from '../../../components/Title';
import MemberCard from './MemberCard';
import useFirestore from '../../../hooks/useFirestore';

function TeamMemberSection() {
	const { docs } = useFirestore('members');
	return (
		<div className="py-[120px] px-4">
			<Title title="Team Member" />
			<div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
				{docs.map((member) => (
					<div key={member.id}>
						<MemberCard
							name={member.name}
							image={member.image}
							position={member.position}
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default TeamMemberSection;

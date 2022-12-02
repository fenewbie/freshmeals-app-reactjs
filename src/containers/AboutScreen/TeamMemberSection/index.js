import Title from '../../../components/Title';
import MemberCard from './MemberCard';

function TeamMemberSection() {
	const fakeData = [
		{
			id: 1,
			name: 'Paul Thompson',
			position: 'Managing Director',
			desc: 'I am an experienced Managing Director with a demonstrated history of working in the food & beverages industry. Skilled in Catering, Negotiation, Management, Business Development, and Marketing Strategy.',
			image: 'https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/team/1.jpg',
		},
		{
			id: 2,
			name: 'Billy Farmer',
			position: 'Sales Manager',
			desc: 'I have been part of FreshMeals for over 30 years and also spent 2 years as a Sales Manager at well known food production company. I am really excited to be part of FreshMeals who are offering the finest quality the markets have to offer.',
			image: 'https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/team/1.jpg',
		},
		{
			id: 3,
			name: 'William Bell',
			position: 'Operations Manager',
			desc: 'Having run my own fruit and vegetable supply chain business for over 30 years, I am really excited to have formed a close partnership with FreshMeals.',
			image: 'https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/team/1.jpg',
		},
		{
			id: 4,
			name: 'Maxine Valentini',
			position: 'Customer Care',
			desc: 'Maxine is our customer care manager at FreshMeals. She has a broad range of experience in the food industry and has worked for some prominent companies in this sector.',
			image: 'https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/team/1.jpg',
		},
	];
	return (
		<div className="py-[120px] px-4">
			<Title title="Team Member" />
			<div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
				{fakeData.map((member) => (
					<div>
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

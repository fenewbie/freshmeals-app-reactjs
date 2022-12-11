import Title from '../../../components/Title';
import useFirestore from '../../../hooks/useFirestore';
import { BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Card from '../../../components/UI/Card';

function TeamMemberSection() {
	const { docs } = useFirestore('members');
	return (
		<div className="py-[120px] px-4">
			<Title title="Team Member" />
			<div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
				{docs.map((member) => (
					<Card key={member.id}>
						<div className="rounded border-2 border-zinc-100 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-300 group">
							<img src={member.image} alt="member" />
							<div className="p-8 text-center">
								<span className="block font-bold text-greenBtn text-sm">
									{member.position}
								</span>
								<Link
									to="/team-Detail"
									className="block text-xl font-bold transition-all hover:text-greenBtn mt-2"
								>
									{member.name}
								</Link>
								<span className="flex justify-center mt-4">
									<Link
										to="/about"
										className="px-2 hover:text-greenBtn transition-all cursor-pointer"
									>
										<BsFacebook />
									</Link>
									<Link
										to="/about"
										className="px-2 hover:text-greenBtn transition-all cursor-pointer"
									>
										<BsTwitter />
									</Link>
									<Link
										to="/about"
										className="px-2 hover:text-greenBtn transition-all cursor-pointer"
									>
										<BsLinkedin />
									</Link>
								</span>
							</div>
						</div>
					</Card>
				))}
			</div>
		</div>
	);
}

export default TeamMemberSection;
import { Link } from 'react-router-dom';
import SocialLink from '@components/UI/SocialLink';

function MemberCard({ name, image, position }) {
	return (
		<div className="rounded border-2 border-zinc-100 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-300 group">
			<img
				src={image}
				alt="member"
			/>
			<div className="p-8 text-center">
				<span className="font-bold text-greenBtn text-sm min-h-[40px] flex items-center justify-center">
					{position}
				</span>
				<Link
					to="/about"
					className="block text-xl font-bold transition-all hover:text-greenBtn mt-2 "
				>
					{name}
				</Link>
				<div className="flex justify-center">
					<SocialLink />
				</div>
			</div>
		</div>
	);
}

export default MemberCard;

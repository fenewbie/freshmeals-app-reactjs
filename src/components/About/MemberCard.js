import { Link } from 'react-router-dom';
import { BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs';

function MemberCard({ name, image, position }) {
	return (
		<div className="rounded border-2 border-zinc-100 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-300 group">
			<img
				src={image}
				alt="member"
			/>
			<div className="p-8 text-center">
				<span className="block font-bold text-greenBtn text-sm">
					{position}
				</span>
				<Link
					to="/team-Detail"
					className="block text-xl font-bold transition-all hover:text-greenBtn mt-2"
				>
					{name}
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
	);
}

export default MemberCard;

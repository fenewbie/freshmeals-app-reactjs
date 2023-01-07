import { FaFacebookF, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import Tooltip from '../Tooltip';

export default function SocialLink() {
	return (
		<div className="flex gap-4 py-7">
			<Tooltip content="Facebook">
				<button className="p-3 rounded-full bg-slate-200 hover:bg-greenBtn">
					<FaFacebookF />
				</button>
			</Tooltip>
			<Tooltip content="Twitter">
				<button className="p-3 rounded-full bg-slate-200 hover:bg-greenBtn">
					<FaTwitter />
				</button>
			</Tooltip>
			<Tooltip content="Falinkedin">
				<button className="p-3 rounded-full bg-slate-200 hover:bg-greenBtn">
					<FaLinkedin />
				</button>
			</Tooltip>
			<Tooltip content="Youtube">
				<button className="p-3 rounded-full bg-slate-200 hover:bg-greenBtn">
					<FaYoutube />
				</button>
			</Tooltip>
		</div>
	);
}

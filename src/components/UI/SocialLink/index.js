import { FaFacebookF, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import Tooltip from '../Tooltip';

export default function SocialLink() {
	return (
		<div className="flex gap-4 py-7">
			<Tooltip content="Facebook" direction="right">
				<a
					className="p-3 rounded-full bg-slate-200 hover:bg-greenBtn block"
					href="https://vi-vn.facebook.com"
				>
					<FaFacebookF />
				</a>
			</Tooltip>
			<Tooltip content="Twitter" direction="right">
				<a
					className="p-3 rounded-full bg-slate-200 hover:bg-greenBtn block"
					href="https://twitter.com"
				>
					<FaTwitter />
				</a>
			</Tooltip>
			<Tooltip content="Linkedin" direction="right">
				<a
					className="p-3 rounded-full bg-slate-200 hover:bg-greenBtn block"
					href="https://www.linkedin.com"
				>
					<FaLinkedin />
				</a>
			</Tooltip>
			<Tooltip content="Youtube" direction="right">
				<a
					className="p-3 rounded-full bg-slate-200 hover:bg-greenBtn block"
					href="https://www.youtube.com/"
				>
					<FaYoutube />
				</a>
			</Tooltip>
		</div>
	);
}

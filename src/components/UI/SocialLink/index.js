import { FaFacebookF, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import TooltipCustom from '../TooltipCustom';

export default function SocialLink() {
	return (
		<div className="flex gap-4 py-7">
			<TooltipCustom content="Feature under development">
				<button className="p-3 rounded-full bg-slate-200 hover:bg-greenBtn">
					<FaFacebookF />
				</button>
			</TooltipCustom>
			<TooltipCustom content="Feature under development">
				<button className="p-3 rounded-full bg-slate-200 hover:bg-greenBtn">
					<FaTwitter />
				</button>
			</TooltipCustom>
			<TooltipCustom content="Feature under development">
				<button className="p-3 rounded-full bg-slate-200 hover:bg-greenBtn">
					<FaLinkedin />
				</button>
			</TooltipCustom>
			<TooltipCustom content="Feature under development">
				<button className="p-3 rounded-full bg-slate-200 hover:bg-greenBtn">
					<FaYoutube />
				</button>
			</TooltipCustom>
		</div>
	);
}

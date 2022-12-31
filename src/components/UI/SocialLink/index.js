import { FaFacebookF, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Tooltip } from 'flowbite-react';

export default function SocialLink() {
	return (
		<div className="flex gap-4 py-7">
			<Tooltip
				content={'Facebook'}
				arrow={false}
				style={'light'}
				placement={'bottom'}
				animation={'duration-300'}
			>
				<button className="p-3 rounded-full bg-slate-200 hover:bg-greenBtn">
					<FaFacebookF />
				</button>
			</Tooltip>
			<Tooltip
				content={'Twitter'}
				arrow={false}
				style={'light'}
				placement={'bottom'}
				animation={'duration-300'}
			>
				<button className="p-3 rounded-full bg-slate-200 hover:bg-greenBtn">
					<FaTwitter />
				</button>
			</Tooltip>
			<Tooltip
				content={'Linkedin'}
				arrow={false}
				style="light"
				placement={'bottom'}
				animation={'duration-300'}
			>
				<button className="p-3 rounded-full bg-slate-200 hover:bg-greenBtn">
					<FaLinkedin />
				</button>
			</Tooltip>
			<Tooltip
				content={'Youtube'}
				arrow={false}
				style="light"
				placement={'bottom'}
				animation={'duration-300'}
			>
				<button className="p-3 rounded-full bg-slate-200 hover:bg-greenBtn">
					<FaYoutube />
				</button>
			</Tooltip>
		</div>
	);
}

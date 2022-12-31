import { GrLocation } from 'react-icons/gr';
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';

import * as cs from '@utils/constants';
import SocialLink from '@components/UI/SocialLink';

const WebInfo = () => {
	return (
		<div className="w-full p-2">
			<div className="bg-black w-2/3 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 py-1 mb-6 rounded-lg">
				<img className="rounded-lg" src={cs.logo01} alt="Freshmeals" />
			</div>
			<p className="mb-6">
				Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem
				Ipsum is dummy text of the printing.
			</p>
			<ul className="space-y-3">
				<li className="flex items-center space-x-3">
					<GrLocation />
					<p>London, United Kingdom</p>
				</li>
				<li className="flex items-center space-x-3">
					<FiPhoneCall />
					<a href="tel:+0123-456789" className="hover:text-[#80B500]">
						+0123-456789
					</a>
				</li>
				<li className="flex items-center space-x-3">
					<HiOutlineMail />
					<a href="mailto:example@gmail.com" className="hover:text-[#80B500]">
						example@gmail.com
					</a>
				</li>
				<li className="flex items-center space-x-3">
					<SocialLink />
				</li>
			</ul>
		</div>
	);
};

export default WebInfo;

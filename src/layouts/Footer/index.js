import { GrLocation } from 'react-icons/gr';
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';


import { SubscribeForm } from '@components/Form';
import SocialLink from '@components/UI/SocialLink';
import * as cs from '@utils/constants';
import Navlink from '@components/UI/Navlink';

const Footer = () => {
	return (
		<footer className="w-full h-auto bg-[#f7f5eb] !mt-0 ">
			<div className="w-full px-4 sm:px-8 md:px-8 lg:px-8 xl:px-8 pt-24 pb-14 mx-auto ease-in-out duration-200 grid grid-cols-1 lg:gap-8 gap-2 md:grid-cols-8 lg:grid-cols-12">
				<div className="lg:col-span-3 md:col-span-4  mb-3">
					<div className="w-full p-2">
						<div className="flex items-center w-2/3 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-3">
							<img src={cs.logo02} alt="logo" className="h-16 -ml-8" />
							<span className="text-2xl font-bold whitespace-nowrap uppercase -ml-6 mt-4 ">
								Freshmeals
							</span>
						</div>
						<p className="mb-6">
							Lorem Ipsum is simply dummy text of the and typesetting industry.
							Lorem Ipsum is dummy text of the printing.
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
								<a
									href="mailto:example@gmail.com"
									className="hover:text-[#80B500]"
								>
									example@gmail.com
								</a>
							</li>
							<li className="flex items-center space-x-3">
								<SocialLink />
							</li>
						</ul>
					</div>
				</div>
				<div className="lg:col-span-2 md:col-span-4 mb-3">
					<div className="w-full p-2">
						<h4 className="text-xl font-bold mb-6">Company</h4>
						<Navlink type="footer" items={cs.linkList} />
					</div>
				</div>
				<div className="lg:col-span-2 md:col-span-4 mb-3">
					<div className="w-full p-2">
						<h4 className="text-xl font-bold mb-6">Services</h4>
						<Navlink type="footer" items={cs.linkFooter} />
					</div>
				</div>
				<div className="lg:col-span-2 md:col-span-4 mb-3">
					<div className="w-full p-2">
						<h4 className="text-xl font-bold mb-6">Customer Care</h4>
						<Navlink type="footer" items={cs.userList} />
					</div>
				</div>
				<div className="lg:col-span-3 md:col-span-4 mb-3">
					<div className="w-full h-auto p-2 md:col-span-2 lg:col-span-2 xl:col-span-1">
						<div className="w-full">
							<h4 className="text-xl font-bold mb-6">Newsletter</h4>
							<p className="mb-5">
								Subscribe to our weekly Newsletter and receive updates via
								email.
							</p>
							<div className="w-full mb-6">
								<SubscribeForm isFooter />
							</div>
						</div>
						<div className="w-full">
							<h5 className="text-base font-bold mb-4">We Accept</h5>
							<div className="h-12">
								<img
									src={cs.paymentMethod}
									alt="payment"
									className="h-full object-contain"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="h-36 lg:h-24 xl:h24 w-full bg-slate-900">
				<div className="h-full py-8 px-4 sm:px-8 md:px-8 lg:px-8 xl:px-8 flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between items-center text-white mx-auto ">
					<p className="max-md:text-sm">All Rights Reserved @ Company 2023</p>
					<ul className="flex space-x-4 font-semibold text-center justify-center max-md:text-sm">
						<li>Terms & Conditions</li>
						<li>Claim</li>
						<li>Privacy & Policy</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

import CopyRight from './CopyRight';
import CustomerCare from './CustomerCare';
import Newsletter from './Newsletter';
import FooterService from './FooterService';
import Company from './Company';
import WebInfo from './WebInfo';

const Footer = () => {
	return (
		<footer className="w-full h-auto bg-[#f7f5eb] !mt-0 ">
			<div className="w-full px-4 sm:px-8 md:px-8 lg:px-8 xl:px-8 pt-24 pb-14 mx-auto ease-in-out duration-200 grid grid-cols-1 lg:gap-8 gap-2 md:grid-cols-8 lg:grid-cols-12">
				<div className="lg:col-span-3 md:col-span-4  mb-3">
					<WebInfo />
				</div>
				<div className="lg:col-span-2 md:col-span-4 mb-3">
					<Company />
				</div>
				<div className="lg:col-span-2 md:col-span-4 mb-3">
					<FooterService />
				</div>
				<div className="lg:col-span-2 md:col-span-4 mb-3">
					<CustomerCare />
				</div>
				<div className="lg:col-span-3 md:col-span-4 mb-3">
					<Newsletter />
				</div>
			</div>
			<CopyRight />
		</footer>
	);
};

export default Footer;

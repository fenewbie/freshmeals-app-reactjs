import CopyRight from './CopyRight';
import CustomerCare from './CustomerCare';
import Newsletter from './Newsletter';
import FooterService from './FooterService';
import Company from './Company';
import WebInfo from './WebInfo';

const Footer = () => {
  return (
    <footer className='w-full h-auto bg-[#f7f5eb] !mt-0'>
      <div
        className={`w-full px-4 sm:px-8 md:px-8 lg:px-8 xl:px-8 pt-24 pb-5 mx-auto ease-in-out duration-200 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-5`}>
        <WebInfo />
        <Company />
        <FooterService />
        <CustomerCare />
        <Newsletter />
      </div>
      <CopyRight />
    </footer>
  );
};

export default Footer;

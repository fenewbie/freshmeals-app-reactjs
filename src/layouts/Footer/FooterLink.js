import { NavLink } from 'react-router-dom';
import { MdDoubleArrow } from 'react-icons/md';

const FooterLink = ({ to, title, className }) => {
  return (
    <NavLink
      to={to}
      className={`${
        className || ''
      } group inline-flex items-center capitalize hover:translate-x-4 hover:text-[#80B500] hover:font-semibold hover:ease-in-out hover:duration-300`}>
      <MdDoubleArrow className='-translate-x-full invisible w-0 group-hover:visible group-hover:w-6 group-hover:-translate-x-1 group-hover:ease-in-out group-hover:duration-300' />
      <span>{title}</span>
    </NavLink>
  );
};

export default FooterLink;

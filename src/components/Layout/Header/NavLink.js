import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const NavbarLink = ({ to, className = '', title }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <NavLink
      to={to}
      className={`${isActive ? 'text-slate-400' : 'text-black'} ${className} text-base capitalize`}>
      {title}
    </NavLink>
  );
};

export default NavbarLink;

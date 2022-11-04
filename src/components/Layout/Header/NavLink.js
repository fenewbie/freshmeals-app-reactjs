import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const NavbarLink = ({ to, className = '', title }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <NavLink
      to={to}
      className={`${
        isActive ? 'text-green-300' : 'text-white'
      } ${className} text-base`}>
      {title}
    </NavLink>
  );
};

export default NavbarLink;

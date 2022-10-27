import { Link } from 'react-router-dom';

const NavLink = ({ to, className = '', title }) => {
  return (
    <Link to={to} className={`${className} text-base capitalize`}>
      {title}
    </Link>
  );
};

export default NavLink;

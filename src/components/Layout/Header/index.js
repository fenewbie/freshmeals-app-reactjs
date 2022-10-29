import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom';
import Banner from './Banner';
import NavbarLink from './NavLink';
import { navbarList } from '../../../constants/route';
import brandLogo from '../../../assets/logo.png';

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header
      className={`relative flex justify-center ${
        isHomePage ? 'bg-transparent' : 'bg-gradient-to-r from-slate-800 to-slate-700'
      }`}>
      {isHomePage && <Banner />}
      <div
        className={`z-10 ${
          isHomePage ? 'absolute' : ''
        } mx-auto py-6 flex justify-center items-center md:justify-between md:w-[768px] lg:w-[1200px] ease-in-out duration-200`}>
        <div className='hidden md:inline-block lg:inline-block'>
          <img src={brandLogo} alt='Brand' className='h-16' />
        </div>
        <nav>
          <ul className='flex sm:space-x-2 md:space-x-4 lg:space-x-6'>
            {navbarList.length > 0 &&
              navbarList.map(navItem => (
                <li key={navItem.id}>
                  <FontAwesomeIcon icon={faSeedling} className='text-white' />
                  <NavbarLink to={navItem.url} title={navItem.title} />
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

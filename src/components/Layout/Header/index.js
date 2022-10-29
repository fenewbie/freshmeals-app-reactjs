import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom';
import Banner from './Banner';
import NavbarLink from './NavLink';

const Header = () => {
  const navbarList = [
    {
      id: 1,
      title: 'home',
      url: '/',
      parent_id: null,
    },
    {
      id: 2,
      title: 'shop',
      url: '/shop',
      parent_id: 1,
    },
    {
      id: 3,
      title: 'about',
      url: '/about',
      parent_id: 1,
    },
    {
      id: 4,
      title: 'contact',
      url: '/contact',
      parent_id: 1,
    },
    {
      id: 5,
      title: 'sign in',
      url: '/sign-in',
      parent_id: 1,
    },
    {
      id: 6,
      title: 'register',
      url: '/register',
      parent_id: 1,
    },
  ];
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
        } mx-auto py-6 flex justify-center md:justify-between md:w-[768px] lg:w-[1200px] ease-in-out duration-200`}>
        <div className='hidden md:inline-block lg:inline-block'>
          <span className='text-white font-bold text-2xl'>FRESHMEALS</span>
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

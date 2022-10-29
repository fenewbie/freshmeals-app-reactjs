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

  return (
    <header className='relative'>
      {location.pathname === '/' && <Banner />}
      <div
        className={`z-20 bg-yellow-200 flex justify-center md:justify-between md:w-[768px] lg:w-[1200px] mx-auto ease-in-out duration-200`}>
        <div className='hidden md:inline-block lg:inline-block'>Brand Header</div>
        <nav>
          <ul className='flex space-x-2'>
            {navbarList.length > 0 &&
              navbarList.map(navItem => (
                <li key={navItem.id}>
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

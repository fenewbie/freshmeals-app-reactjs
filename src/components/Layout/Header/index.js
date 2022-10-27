import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNavbarList } from '../../../redux/features/navbarSlice';
import NavLink from './NavLink';

const Header = () => {
  const { list: navbarList } = useSelector(state => state.navbar);
  const { currentPage } = useSelector(state => state.navbar);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNavbarList());
    console.log('Navbar List');
    console.log(navbarList);
  }, [navbarList.length]);

  return (
    <header className='border border-red-500 w-screen p-1'>
      <div
        className={`bg-yellow-200 flex justify-center md:justify-between md:w-[768px] lg:w-[1200px] mx-auto`}>
        <div className='hidden md:inline-block lg:inline-block'>Brand Header</div>
        <nav>
          <ul className='flex space-x-2'>
            {navbarList.length > 0 &&
              navbarList.map(navItem => (
                <li key={navItem.id}>
                  <NavLink to={navItem.url} title={navItem.title} />
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

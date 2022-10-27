import Footer from './Footer';
import Header from './Header';

const MainLayout = ({ children }) => {
  return (
    <div className=' border border-black sm:container'>
      <Header />
      <main className='sm:container'>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;

import Footer from './Footer';
import Header from './Header';

const MainLayout = ({ children, className }) => {
  return (
    <div className='w-full mx-auto flex flex-col space-y-1 p-0 m-0'>
      <Header />
      <main className={`border border-green-500 w-full p-1`}>
        <div className='bg-orange-200 md:w-[768px] lg:w-[1200px] mx-auto ease-in-out duration-200'>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;

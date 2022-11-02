import Footer from './Footer';
import Header from './Header';

const MainLayout = ({ children, className }) => {
  return (
    <div className='w-full mx-auto flex flex-col space-y-1 p-0 m-0'>
      {/* <Header /> */}
      <main className={`border border-green-500 w-full lg:max-w-full p-1 lg:w-[1200px] mx-auto`}>
        <div className={`px-4 sm:px-8 md:px-8 lg:px-8 xl:px-8 mx-auto ease-in-out duration-200`}>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;

import Footer from './Footer';
import Header from './Header';

const MainLayout = ({ children, className }) => {
  return (
    <div className=' border border-black w-screen mx-auto flex flex-col space-y-1'>
      <Header />
      <main className={`border border-green-500 w-screen p-1`}>
        <div className='bg-orange-200 md:w-[768px] lg:w-[1200px] mx-auto'>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;

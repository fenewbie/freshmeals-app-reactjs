import Footer from './Footer';
import Header from './Header';

const MainLayout = ({ children, className }) => {
  return (
    <div className='w-full mx-auto flex flex-col space-y-1 p-0 m-0'>
      {/* <Header /> */}
      <main className={``}>
        <div className={``}>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;

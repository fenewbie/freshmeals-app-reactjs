import Footer from './Footer';
import Header from './Header';

const MainLayout = ({ children, className }) => {
  return (
    <div className=' border border-black w-screen mx-auto flex flex-col space-y-1'>
      <Header />
      <main className={`${className} border border-green-500`}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;

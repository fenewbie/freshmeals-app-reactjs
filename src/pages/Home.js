import MainLayout from '../components/Layout/MainLayout';
import Promotion from '../components/UI/Promotion';
import CountDown from '../components/UI/CountDown'
import Blog from '../components/UI/Blog';
import Test from '../components/UI/Tabs/TestTabs';
import ProductDetail from '../components/UI/ProductDetails';

const Home = () => {
  return (
    <MainLayout>
      <Promotion/>
      <div className='my-20'>
        <Test/>
      </div>
      <CountDown/>
      <Blog/>
      <ProductDetail/>
    </MainLayout>
  );
};

export default Home;

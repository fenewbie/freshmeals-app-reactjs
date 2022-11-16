import MainLayout from '../components/Layout/MainLayout';
import Promotion from '../components/UI/Promotion';
import CountDown from '../components/UI/CountDown'
import ProductDetail from '../components/UI/ProductDetails';

const Home = () => {
  return (
    <MainLayout>
      <Promotion/>
      <CountDown/>
      <ProductDetail/>
    </MainLayout>
  );
};

export default Home;

import MainLayout from '../components/Layout/MainLayout';
import Promotion from '../components/UI/Promotion';
import ProductList from './ProductList';

const Home = () => {
  return (
    <MainLayout>
      <Promotion/>
      <ProductList/>
    </MainLayout>
  );
};

export default Home;

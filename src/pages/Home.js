import MainLayout from '../components/Layout/MainLayout';
import Promotion from '../components/UI/Promotion';
import CountDown from '../components/UI/CountDown'
import Blog from '../components/UI/Blog';

const Home = () => {
  return (
    <MainLayout>
      <Promotion/>
      <CountDown/>
      <Blog/>
    </MainLayout>
  );
};

export default Home;

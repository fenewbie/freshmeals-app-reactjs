import MainLayout from '../components/Layout/MainLayout';
import Promotion from '../components/UI/Promotion';
import CountDown from '../components/UI/CountDown'
import Blog from '../components/UI/Blog';
import Portfolio from '../components/UI/Portfolio';

const Home = () => {
  return (
    <MainLayout>
      <Promotion/>
      <CountDown/>
      <Portfolio/>
      <Blog/>
    </MainLayout>
  );
};

export default Home;

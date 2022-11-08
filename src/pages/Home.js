import MainLayout from '../components/Layout/MainLayout';
import Promotion from '../components/UI/Promotion';
import CountDown from '../components/UI/CountDown'

const Home = () => {
  return (
    <MainLayout>
      <Promotion/>
      <CountDown/>
    </MainLayout>
  );
};

export default Home;

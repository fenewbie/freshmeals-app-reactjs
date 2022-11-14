import MainLayout from '../components/Layout/MainLayout';
import Promotion from '../components/UI/Promotion';
import CountDown from '../components/UI/CountDown'
import Blog from '../components/UI/Blog';
import Tabs from '../components/UI/Tabs/Tabs';

const Home = () => {
  return (
    <MainLayout>
      <Promotion/>
      <div className='my-20'>
        <Tabs/>
      </div>
      <CountDown/>
      <Blog/>
    </MainLayout>
  );
};

export default Home;

import MainLayout from '../components/Layout/MainLayout';
import Promotion from '../components/UI/Promotion';
import CountDown from '../components/UI/CountDown';
import Portfolio from '../components/UI/Portfolio'
import Blog from '../components/UI/Blog';
import Test from '../components/UI/Tabs/TestTabs';

const Home = () => {
  return (
		<MainLayout>
			<Promotion />
			<div className="my-20">
				<Test />
			</div>
			<CountDown />
			<Portfolio/>
			<Blog />
		</MainLayout>
	);
};

export default Home;

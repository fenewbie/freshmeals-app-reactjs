import MainLayout from '../../components/Layout/MainLayout';
import Promotion from '../../containers/Promotion';
import CountDown from '../../containers/CountDown';
import Portfolio from '../../containers/Portfolio';
import Blog from '../../containers/Blog';
import OurProducts from '../Shop/OurProducts';

const Home = () => {
	return (
		<MainLayout>
			<Promotion />
			<OurProducts />
			<CountDown />
			<Portfolio />
			<Blog />
		</MainLayout>
	);
};

export default Home;

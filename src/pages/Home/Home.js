import HomeLayout from '../../components/Layout/HomeLayout';
import Promotion from '../../containers/Promotion';
import CountDown from '../../containers/CountDown';
import Portfolio from '../../containers/Portfolio';
import Blog from '../../containers/Blog';
import ProductList from '../../containers/Product/ProducList';
import FeatureHomePage from '../../components/Features/FeatureHomePage';

const Home = () => {
	return (
		<HomeLayout>
			<Promotion />
			<ProductList />
			<CountDown />
			<FeatureHomePage/>
			<Portfolio />
			<Blog />
		</HomeLayout>
	);
};

export default Home;

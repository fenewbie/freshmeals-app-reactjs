
import Promotion from '../../containers/Promotion';
import CountDown from '../../containers/CountDown';
import Portfolio from '../../containers/Portfolio';
import Blog from '../../containers/Blog';
import ProductList from '../../containers/Product/ProducList';
import FeatureHomePage from '../../containers/Features/FeatureHomePage';

const Home = () => {
	return (
		<div className="px-4 sm:px-8 md:px-8 lg:px-8 xl:px-8 mx-auto">
			<Promotion />
			<ProductList />
			<CountDown />
			<FeatureHomePage />
			<Portfolio />
			<Blog />
		</div>
	);
};

export default Home;

import HomeLayout from '../../components/Layout/HomeLayout';
import Promotion from '../../containers/Promotion';
import CountDown from '../../containers/CountDown';
import Portfolio from '../../containers/Portfolio';
import Blog from '../../containers/Blog';
import ProductList from '../../containers/ProductList';

const Home = () => {
	return (
		<HomeLayout>
			<Promotion />
			<ProductList />
			<CountDown />
			<Portfolio />
			<Blog />
		</HomeLayout>
	);
};

export default Home;

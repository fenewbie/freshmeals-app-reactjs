import PromotionSection from '../../containers/HomeScreen/PromotionSection';
import CountDownSection from '../../containers/HomeScreen/CountDownSection';
import PortfolioSection from '../../containers/HomeScreen/PortfolioSection';
import BlogSection from '../../containers/HomeScreen/BlogSection';
import FeatureHomePage from '../../containers/HomeScreen/FeatureSection/FeatureHomePage';
import ProductList from '../../containers/Product/ProductList';

const Home = () => {
	return (
		<div className="px-4 sm:px-8 md:px-8 lg:px-8 xl:px-8 mx-auto">
			<PromotionSection />
			<ProductList/>
			<CountDownSection />
			<FeatureHomePage />
			<PortfolioSection />
			<BlogSection />
		</div>
	);
};

export default Home;

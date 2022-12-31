import CountDownSection from '@features/HomeScreen/CountDownSection';
import PortfolioSection from '@features/HomeScreen/PortfolioSection';
import BlogSection from '@features/HomeScreen/BlogSection';
import FeatureHomePage from '@features/HomeScreen/FeatureSection/FeatureHomePage';
import ProductSection from '@features/HomeScreen/ProductSection';
import PromotionSection from '@features/HomeScreen/PromotionSection/index';

const Home = () => {
	return (
		<div>
			<PromotionSection />
			<ProductSection />
			<CountDownSection />
			<FeatureHomePage />
			<PortfolioSection />
			<BlogSection />
		</div>
	);
};

export default Home;

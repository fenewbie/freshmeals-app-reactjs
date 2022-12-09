import PromotionSection from '@features/HomeScreen/PromotionSection';
import CountDownSection from '@features/HomeScreen/CountDownSection';
import PortfolioSection from '@features/HomeScreen/PortfolioSection';
import BlogSection from '@features/HomeScreen/BlogSection';
import FeatureHomePage from '@features/HomeScreen/FeatureSection/FeatureHomePage';
import ProductSection from '@features/HomeScreen/ProductSection';

const Home = () => {
	return (
		<div className="px-4 sm:px-8 md:px-8 lg:px-8 xl:px-8 mx-auto">
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

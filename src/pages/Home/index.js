import {
	CountDownSection,
	PortfolioSection,
	FeatureHomePage,
	ProductSection,
	PromotionSection,
} from '@features/HomeScreen';

import BlogLeatest from '@features/BlogScreen/BlogLeatest';

const Home = () => {
	return (
		<>
			<PromotionSection />
			<ProductSection />
			<CountDownSection />
			<FeatureHomePage />
			<PortfolioSection />
			<BlogLeatest />
		</>
	);
};

export default Home;


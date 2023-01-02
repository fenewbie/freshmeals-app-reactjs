import CountDownSection from '@features/HomeScreen/CountDownSection';
import PortfolioSection from '@features/HomeScreen/PortfolioSection';
import FeatureHomePage from '@features/HomeScreen/FeatureSection/FeatureHomePage';
import ProductSection from '@features/HomeScreen/ProductSection';
import PromotionSection from '@features/HomeScreen/PromotionSection/index';
import BlogLeatest from '@features/BlogScreen/BlogLeatest';
import Container from '@components/UI/Container';
import { getDocuments } from '@services/api';

const Home = () => {
	return (
		<>
			<Container>
				<PromotionSection />
				<ProductSection />
			</Container>
			<CountDownSection />
			<Container>
				<FeatureHomePage />
			</Container>
			<PortfolioSection />
			<BlogLeatest />
		</>
	);
};

export default Home;
export const loader = () => {
	const getDocs = async function () {
		const portfolio = await getDocuments('portfolio');
		const countdown = await getDocuments('countdown');
		const slideHeader = await getDocuments('slide-header');

		return { portfolio, countdown, slideHeader };
	};

	return getDocs();
};

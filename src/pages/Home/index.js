import { getDocuments } from '@services/api';

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
export const loader = () => {
	const getDocs = async function () {
		const portfolio = await getDocuments('portfolio');
		const countdown = await getDocuments('countdown');
		const slideHeader = await getDocuments('slide-header');

		return { portfolio, countdown, slideHeader };
	};

	return getDocs();
};

import Footer from './Footer';
import { Outlet, useLocation } from 'react-router-dom';
import CommonSection from '@components/CommonSection';
import Header from './Header';
import FeatureFooter from '@features/HomeScreen/FeatureSection/FeatureFooter';
import { getData } from '../services/api';

function RootLayout() {
	const location = useLocation();
	const isHomePage = location.pathname === '/';
	return (
		<>
			{isHomePage ? (
				<Header />
			) : (
				<CommonSection title={location.pathname.substring(1)}>
					<Header />
				</CommonSection>
			)}
			<main className="w-full mx-auto p-1">
				<Outlet />
			</main>
			<FeatureFooter />
			<Footer />
		</>
	);
}

export default RootLayout;
export const loader = () => {
	return getData();
};
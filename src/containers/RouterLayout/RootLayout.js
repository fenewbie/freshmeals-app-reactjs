import Footer from '../../components/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import CommonSection from '../CommonSection';
import Header from '../../components/Header';
import FeatureFooter from '../Features/FeatureFooter';

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
			<FeatureFooter/>
			<Footer />
		</>
	);
}

export default RootLayout;

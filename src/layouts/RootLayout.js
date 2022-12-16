import Footer from './Footer';
import { Outlet, useLocation } from 'react-router-dom';
import CommonSection from '@components/CommonSection';
import Header from './Header';
import FeatureFooter from '@features/HomeScreen/FeatureSection/FeatureFooter';
import { getData, getProductByTitle } from '../services/api';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCartData, sendCartData } from '@store/cart/cart-actions';

let isInitial = true;
function RootLayout() {
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCartData());
	}, [dispatch]);

	useEffect(() => {
		if (isInitial) {
			isInitial = false;
			return;
		}

		if (cart.changed) {
			dispatch(sendCartData(cart));
		}
	}, [cart, dispatch]);

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

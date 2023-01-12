import { useEffect } from 'react';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@services/firebase';
import { saveUser } from '@store/auth/authSlice';

import Loader from '@components/UI/Loader';
import RootLayout, { loader as rootLoader } from './layouts/RootLayout';
import ShopLayout from './layouts/ShopLayout';
import BlogLayout from './layouts/BlogLayout';
import PrivateRoute from '@components/PrivateRoute';

import ProductDetailPage, {
	loader as productLoader,
} from './pages/Shop/ProductDetailPage';
import BlogDetailPage, {
	loader as blogLoader,
} from './pages/Blog/BlogDetailPage';
import { action as checkoutAction } from '@features/CheckoutScreen';

import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Login from 'pages/Auth/Login';
import Register from 'pages/Auth/Register';
import UserProfile from 'pages/UserProfile';
import ProductGridPage from 'pages/Shop/ProductGridPage';
import SearchProductsPage from 'pages/Shop/ProductSearch';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import About from 'pages/About';
import Contact from './pages/Contact';
import BlogGridPage from 'pages/Blog/BlogGridPage';
import SearchBlogsPage from 'pages/Blog/BlogSearch';
import Gallery from 'pages/Gallery';
import ComingSoon from './pages/ComingSoon';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				dispatch(saveUser(user.refreshToken));
			} else {
				dispatch(saveUser(undefined));
			}
		});
		return () => {
			unsubscribe();
		};
	}, [dispatch]);

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route
				id="root"
				loader={rootLoader}
				errorElement={<NotFound />}
			>
				<Route
					path="/"
					element={<RootLayout />}
				>
					<Route
						index
						element={<Home />}
					/>
					<Route
						path="login"
						element={<Login />}
					/>
					<Route
						path="register"
						element={<Register />}
					/>
					<Route
						path="user-profile"
						element={
							<PrivateRoute>
								<UserProfile />
							</PrivateRoute>
						}
					></Route>
					<Route
						path="shop"
						element={<ShopLayout />}
					>
						<Route
							index
							element={<ProductGridPage />}
						/>
						<Route
							path=":productId"
							element={<ProductDetailPage />}
							loader={productLoader}
						/>
						<Route
							path="search"
							element={<SearchProductsPage />}
						/>
					</Route>
					<Route
						path="cart"
						element={<Cart />}
					/>
					<Route
						path="checkout"
						element={<Checkout />}
						action={checkoutAction}
					/>
					<Route
						path="about"
						element={<About />}
					/>
					<Route
						path="contact"
						element={<Contact />}
					/>

					<Route
						path="blog"
						element={<BlogLayout />}
					>
						<Route
							index
							element={<BlogGridPage />}
						/>
						<Route
							path=":blogId"
							element={<BlogDetailPage />}
							loader={blogLoader}
						/>
						<Route
							path="search"
							element={<SearchBlogsPage />}
						/>
					</Route>
					<Route
						path="gallery"
						element={<Gallery />}
					/>
				</Route>
				<Route
					path="coming-soon"
					element={<ComingSoon />}
				/>
			</Route>
		)
	);
	return (
		<RouterProvider
			router={router}
			fallbackElement={<Loader type="enter-web" />}
		/>
	);
}

export default App;

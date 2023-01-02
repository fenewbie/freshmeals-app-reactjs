import { lazy, Suspense, useEffect } from 'react';
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
import { loader as productLoader } from './pages/Shop/ProductDetailPage';
import About from './pages/About';
import Contact from './pages/Contact';
import { loader as blogLoader } from './pages/Blog/BlogDetailPage';
import Gallery from './pages/Gallery';
import SearchProductsPage from 'pages/Shop/ProductSearch';
import SearchBlogsPage from 'pages/Blog/BlogSearch';
import { action as checkoutAction } from '@features/CheckoutScreen';
import Login from 'pages/Auth/Login';
import Register from 'pages/Auth/Register';
import PrivateRoute from '@components/PrivateRoute';
import UserProfile from 'pages/UserProfile';

const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Cart = lazy(() => import('./pages/Cart'));
const Checkout = lazy(() => import('./pages/Checkout'));
const ProductDetailPage = lazy(() => import('./pages/Shop/ProductDetailPage'));
const ProductGridPage = lazy(() => import('./pages/Shop/ProductGridPage'));
const BlogGridPage = lazy(() => import('./pages/Blog/BlogGridPage'));
const BlogDetailPage = lazy(() => import('./pages/Blog/BlogDetailPage'));

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
				path="/"
				element={<RootLayout />}
				errorElement={<NotFound />}
				loader={rootLoader}
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
		)
	);
	return (
		<Suspense fallback={<Loader />}>
			<RouterProvider router={router} />
		</Suspense>
	);
}

export default App;

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
import RootLayout, { loader as rootLoader } from '@layouts/RootLayout';
import ShopLayout from '@layouts/ShopLayout';
import BlogLayout from '@layouts/BlogLayout';
import PrivateRoute from '@components/PrivateRoute';
import Home from '@pages/Home'

import { loader as productLoader } from '@pages/Shop/ProductDetailPage';
import { loader as blogLoader } from '@pages/Blog/BlogDetailPage';
import { action as checkoutAction } from '@features/CheckoutScreen';

const SearchProductsPage = lazy(() => import('@pages/Shop/ProductSearch'));
const About = lazy(() => import('@pages/About'));
const ProductDetailPage = lazy(() => import('@pages/Shop/ProductDetailPage'));
const ProductGridPage = lazy(() => import('@pages/Shop/ProductGridPage'));
const Contact = lazy(() => import('@pages/Contact'));
const SearchBlogsPage = lazy(() => import('@pages/Blog/BlogSearch'));
const BlogGridPage = lazy(() => import('@pages/Blog/BlogGridPage'));
const BlogDetailPage = lazy(() => import('@pages/Blog/BlogDetailPage'));
const Gallery = lazy(() => import('@pages/Gallery'));
const Cart = lazy(() => import('@pages/Cart'));
const Checkout = lazy(() => import('@pages/Checkout'));

const Login = lazy(() => import('@pages/Auth/Login'));
const Register = lazy(() => import('@pages/Auth/Register'));
const UserProfile = lazy(() => import('@pages/UserProfile'));

const ComingSoon = lazy(() => import('@pages/ComingSoon'));
const NotFound = lazy(() => import('@pages/NotFound'));

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
			<Route id="root" loader={rootLoader} errorElement={<NotFound />}>
				<Route path="/" element={<RootLayout />}>
					<Route index element={<Home />} />
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
					<Route
						path="user-profile"
						element={
							<PrivateRoute>
								<UserProfile />
							</PrivateRoute>
						}
					></Route>
					<Route path="shop" element={<ShopLayout />}>
						<Route index element={<ProductGridPage />} />
						<Route
							path=":productId"
							element={<ProductDetailPage />}
							loader={productLoader}
						/>
						<Route path="search" element={<SearchProductsPage />} />
					</Route>
					<Route path="cart" element={<Cart />} />
					<Route
						path="checkout"
						element={<Checkout />}
						action={checkoutAction}
					/>
					<Route path="about" element={<About />} />
					<Route path="contact" element={<Contact />} />

					<Route path="blog" element={<BlogLayout />}>
						<Route index element={<BlogGridPage />} />
						<Route
							path=":blogId"
							element={<BlogDetailPage />}
							loader={blogLoader}
						/>
						<Route path="search" element={<SearchBlogsPage />} />
					</Route>
					<Route path="gallery" element={<Gallery />} />
				</Route>
				<Route path="coming-soon" element={<ComingSoon />} />
			</Route>
		)
	);
	return (
		<Suspense fallback={<Loader />}>
			<RouterProvider
				router={router}
				fallbackElement={<Loader type="enter-web" />}
			/>
		</Suspense>
	);
}

export default App;

import { lazy, Suspense } from 'react';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import Loader from '@components/UI/Loader';
import RootLayout, { loader as rootLoader } from './layouts/RootLayout';
import ShopLayout from './layouts/ShopLayout';
import BlogLayout from './layouts/BlogLayout';
import { loader as productLoader } from './pages/Shop/ProductDetailPage';
import About, { loader as aboutLoader } from './pages/About';
import Contact from './pages/Contact';
import { loader as blogLoader } from './pages/Blog/BlogDetailPage';
import Gallery from './pages/Gallery';
import SearchPage from 'pages/Search';
import SearchProductsPage from 'pages/Search/SearchProductsPage';
import SearchBlogsPage from 'pages/Search/SearchBlogsPage';

const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Cart = lazy(() => import('./pages/Cart'));
const Checkout = lazy(() => import('./pages/Checkout'));
const ProductDetailPage = lazy(() => import('./pages/Shop/ProductDetailPage'));
const ProductGridPage = lazy(() => import('./pages/Shop/ProductGridPage'));
const BlogGridPage = lazy(() => import('./pages/Blog/BlogGridPage'));
const BlogDetailPage = lazy(() => import('./pages/Blog/BlogDetailPage'));



function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route
				id="root"
				path="/"
				element={<RootLayout />}
				errorElement={<NotFound />}
				loader={rootLoader}
			>
				<Route index element={<Home />} />
				<Route path="shop" element={<ShopLayout />}>
					<Route index element={<ProductGridPage />}/>
					<Route
						path=":productId"
						element={<ProductDetailPage />}
						loader={productLoader}
					/>
				</Route>
				<Route path="cart" element={<Cart />} />
				<Route path="checkout" element={<Checkout />} />
				<Route path="about" element={<About />} loader={aboutLoader} />
				<Route path="contact" element={<Contact />} />

				<Route path="blog" element={<BlogLayout />}>
					<Route index element={<BlogGridPage />} />
					<Route
						path=":blogId"
						element={<BlogDetailPage />}
						loader={blogLoader}
					/>
				</Route>
				<Route path="gallery" element={<Gallery />} />
				<Route path="search">
					<Route index element={<SearchPage />} />
					<Route path="products" element={<SearchProductsPage />} />
					<Route path="blogs" element={<SearchBlogsPage />} />
				</Route>
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

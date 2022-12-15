import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';

import RootLayout, {
	loader as rootLoader,
} from './layouts/RootLayout';
import Home from './pages/Home/index';
import ShopLayout from './layouts/ShopLayout';
import ProductGrid from './pages/Shop/ProductGrid';
import ProductDetailPage, {
	loader as productLoader,
} from './pages/Shop/ProductDetailPage';
import About, {loader as aboutLoader} from './pages/About';
import Contact from './pages/Contact';
import BlogLayout from './layouts/BlogLayout';
import BlogDetailPage, {
	loader as blogLoader,
} from './pages/Blog/BlogDetailPage';
import Gallery from './pages/Gallery';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import SearchPage, { loader as searchLoader } from 'pages/Search';
import SearchProductsPage from 'pages/Search/SearchProductsPage';
import SearchBlogsPage from 'pages/Search/SearchBlogsPage';
import BlogGridPage from './pages/Blog/BlogGridPage';

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
				<Route
					index
					element={<Home />}
				/>
				<Route
					path="shop"
					element={<ShopLayout />}
				>
					<Route
						index
						element={<ProductGrid />}
					/>
					<Route
						path=":productId"
						element={<ProductDetailPage />}
						loader={productLoader}
					/>
				</Route>
				<Route
					path="cart"
					element={<Cart />}
				/>
				<Route
					path="about"
					element={<About />}
					loader={aboutLoader}
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
				</Route>
				<Route
					path="gallery"
					element={<Gallery />}
				/>
				<Route path="search">
					<Route
						index
						element={<SearchPage />}
					/>
					<Route
						path='products'
						element={<SearchProductsPage />}
					/>
					<Route
						path='blogs'
						element={<SearchBlogsPage/>}
					/>
				</Route>
			</Route>
		)
	);
	return <RouterProvider router={router} />;
}

export default App;

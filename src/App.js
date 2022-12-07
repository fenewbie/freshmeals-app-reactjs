import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';

import Home from './pages/Home/Home';
import ProductDetailPage from './pages/Shop/ProductDetailPage';
import About from './pages/About';
import Contact from './pages/Contact';
import BlogPage from './pages/Blog/BlogPage';

import RootLayout, {
	loader as rootLoader,
} from './containers/RouterLayout/RootLayout';
import NotFound from './pages/NotFound';
import ShopLayout from './containers/RouterLayout/ShopLayout';
import ShopGrid from './pages/Shop/ShopGrid';
import Gallery from './pages/Gallery';
import Cart from './pages/Cart';
import BlogLayout from './containers/RouterLayout/BlogLayout';
import BlogDetailPage, { loader as blogLoader } from './pages/Blog/BlogDetailPage';

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
						element={<ShopGrid />}
					/>
					<Route
						path=":productId"
						element={<ProductDetailPage />}
					/>
				</Route>
				<Route
					path="cart"
					element={<Cart />}
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
						element={<BlogPage />}
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
			</Route>
		)
	);
	return <RouterProvider router={router} />;
}

export default App;

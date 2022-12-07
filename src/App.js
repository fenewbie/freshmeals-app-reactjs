import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';

import RootLayout, {
	loader as rootLoader,
} from './containers/RouterLayout/RootLayout';
import Home from './pages/Home/Home';
import ShopLayout from './containers/RouterLayout/ShopLayout';
import ProductGrid from './pages/Shop/ProductGrid';
import ProductDetailPage, {
	loader as productLoader,
} from './pages/Shop/ProductDetailPage';
import About from './pages/About';
import Contact from './pages/Contact';
import BlogLayout from './containers/RouterLayout/BlogLayout';
import BlogGrid from './pages/Blog/BlogGrid';
import BlogDetailPage, {
	loader as blogLoader,
} from './pages/Blog/BlogDetailPage';
import Gallery from './pages/Gallery';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

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
					<Route index element={<ProductGrid />} />
					<Route
						path=":productId"
						element={<ProductDetailPage />}
						loader={productLoader}
					/>
				</Route>
				<Route path="cart" element={<Cart />} />
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />

				<Route path="blog" element={<BlogLayout />}>
					<Route index element={<BlogGrid />} />
					<Route
						path=":blogId"
						element={<BlogDetailPage />}
						loader={blogLoader}
					/>
				</Route>
				<Route path="gallery" element={<Gallery />} />
			</Route>
		)
	);
	return <RouterProvider router={router} />;
}

export default App;

import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';

import Home from './pages/Home/Home';
import ProductDetailPage, {
	loader as productLoader,
} from './pages/Shop/ProductDetailPage';
import About from './pages/About';
import Contact from './pages/Contact';
import BlogPage from './pages/Blog/';

import RootLayout, {
	loader as productsLoader,
} from './containers/RouterLayout/RootLayout';
import NotFound from './pages/NotFound';
import ShopLayout from './containers/RouterLayout/ShopLayout';
import ShopGrid from './pages/Shop/ShopGrid';
import Gallery from './pages/Gallery';

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route
				id="root"
				path="/"
				element={<RootLayout />}
				errorElement={<NotFound />}
				loader={productsLoader}
			>
				<Route index element={<Home />} />
				<Route path="shop" element={<ShopLayout />}>
					<Route index element={<ShopGrid />} />
					<Route
						path=":productId"
						element={<ProductDetailPage />}
						loader={productLoader}
					/>
				</Route>
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />
				<Route path="blog" element={<BlogPage />} />
			</Route>
		)
	);
	return <RouterProvider router={router} />;
}

export default App;

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
import BlogPage from './pages/Blog/';

import RootLayout from './containers/RouterLayout/RootLayout';
import NotFound from './pages/NotFound';
import ShopLayout from './containers/RouterLayout/ShopLayout';
import ShopGrid from './pages/Shop/ShopGrid';
import Gallery from './pages/Gallery';
import Checkout from './pages/Checkout';

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<RootLayout />} errorElement={<NotFound />}>
				<Route index element={<Home />} />
				<Route path="shop" element={<ShopLayout />}>
					<Route index element={<ShopGrid />} />
					<Route path=":productId" element={<ProductDetailPage />} />
				</Route>
				<Route path="cart" element={<Checkout />} />
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />
				<Route path="blog" element={<BlogPage />} />
				<Route path="gallery" element={<Gallery />} />
			</Route>
		)
	);
	return <RouterProvider router={router} />;
}

export default App;

import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {store} from './redux/store'

import Home from './pages/Home/Home';
import ProductScreen from './pages/Shop/ProductScreen';
import ProductDetail from './pages/Shop/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import BlogPage from './pages/Blog/';
import NotFound from './pages/NotFound';


function App() {
  return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route index element={<Home />}></Route>
					<Route path="/shop" element={<ProductScreen />}></Route>
					<Route path="/shop/:id" element={<ProductDetail />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/contact" element={<Contact />}></Route>
					<Route path="/blog" element={<BlogPage />}></Route>
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;

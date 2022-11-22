import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home/Home';
import ProductsScreen from './pages/Shop/ProductsScreen';
import NotFound from './pages/NotFound';
import {store} from './redux/store'
import Blog from './pages/Blog';



function App() {
  return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/shop" element={<ProductsScreen />}></Route>
					<Route path="/shop/:id" element={<ProductsScreen />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/contact" element={<Contact />}></Route>
					<Route path="/blog" element={<Blog />}></Route>
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;

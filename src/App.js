import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Shop from './pages/Shop/OurProducts';
import {store} from './redux/store'



function App() {
  return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route index element={<Home />}></Route>
					<Route path="/shop" element={<Shop />}></Route>
					<Route path="/shop/:index" element={<Shop />}></Route>

					<Route path="/about" element={<About />}></Route>
					<Route path="/contact" element={<Contact />}></Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;

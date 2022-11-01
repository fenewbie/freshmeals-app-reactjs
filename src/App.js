import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Shop from './pages/Shop';
import store from './redux/store';



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/shop' element={<Shop />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

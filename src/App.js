import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Shop from './pages/Shop';
import store from './redux/store';
import Promotion from './components/Layout/Promotion';



function App() {
  return (
    <Promotion/>
    // <Provider store={store}>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route index element={<Home />}></Route>
    //       <Route path='/shop' element={<Shop />}></Route>
    //       <Route path='/about' element={<About />}></Route>
    //     </Routes>
    //   </BrowserRouter>
    // </Provider>
  );
}

export default App;

import { lazy, Suspense, useEffect } from 'react';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@services/firebase';
import { saveUser } from '@store/auth/authSlice';

import Loader from '@components/UI/Loader';
import RootLayout, { loader as rootLoader } from './layouts/RootLayout';
import ShopLayout from './layouts/ShopLayout';
import BlogLayout from './layouts/BlogLayout';
import PrivateRoute from '@components/PrivateRoute';

import { loader as productLoader } from './pages/Shop/ProductDetailPage';
import { loader as blogLoader } from './pages/Blog/BlogDetailPage';
import { action as checkoutAction } from '@features/CheckoutScreen';

const Home = lazy(() => import('./pages/Home'));
const SearchProductsPage = lazy(() => import('./pages/Shop/ProductSearch'));
const About = lazy(() => import('./pages/About'));
const ProductDetailPage = lazy(() => import('./pages/Shop/ProductDetailPage'));
const ProductGridPage = lazy(() => import('./pages/Shop/ProductGridPage'));
const Contact = lazy(() => import('./pages/Contact'));
const SearchBlogsPage = lazy(() => import('./pages/Blog/BlogSearch'));
const BlogGridPage = lazy(() => import('./pages/Blog/BlogGridPage'));
const BlogDetailPage = lazy(() => import('./pages/Blog/BlogDetailPage'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Cart = lazy(() => import('./pages/Cart'));
const Checkout = lazy(() => import('./pages/Checkout'));

const Login = lazy(() => import('./pages/Auth/Login'));
const Register = lazy(() => import('./pages/Auth/Register'));
const UserProfile = lazy(() => import('./pages/UserProfile'));

const ComingSoon = lazy(() => import('./pages/ComingSoon'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    apiAxios.get('/user').then(resp => {
      setUsers(resp);
    });
  }, []);
  return (
    <div className='container p-3'>
      <h1 className='text-center bg-black text-white text-[150px]'>Hello world</h1>
      <ol className='space-y-3'>
        {users &&
          users.map(item => (
            <li key={item.id} className='font-semibold'>
              {item.username}
              <button
                className='border p-2 bg-red-700 text-white'
                onClick={() => {
                  apiAxios
                    .delete(`/user/${item.id}`)
                    .then(resp => {
                      setUsers(users.filter(user => user.id !== item.id));
                    })
                    .catch(err => {
                      console.log('Delete error: ' + err.message);
                    });
                }}>
                Delete
              </button>
            </li>
          ))}
      </ol>
      <button
        className='border border-black p-2'
        onClick={() => {
          apiAxios.post('/user', { username: 'Johnathan Staney' }).then(resp => {
            setUsers([...users, resp]);
          });
        }}>
        Add new user
      </button>
    </div>
  );
}

export default App;

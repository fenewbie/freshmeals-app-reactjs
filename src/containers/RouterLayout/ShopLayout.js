import { Outlet } from 'react-router-dom';
import ProductList from '../Product/ProducList';


function ShopLayout() {
	return (
		<>
			<ProductList/>
			<Outlet />
		</>
	);
}

export default ShopLayout;

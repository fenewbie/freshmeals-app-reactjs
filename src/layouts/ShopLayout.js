import { Outlet } from 'react-router-dom';

function ShopLayout() {
	return (
		<div className="container my-28">
			<Outlet />
		</div>
	);
}

export default ShopLayout;

import { Outlet } from 'react-router-dom';

function ShopLayout() {
	return (
		<div className="container mx-auto py-28">
			<Outlet />
		</div>
	);
}

export default ShopLayout;

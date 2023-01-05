import { Outlet } from 'react-router-dom';

function ShopLayout() {
	return (
		<div className="container xl:max-w-xl lg:max-w-lg md:max-w-md py-28">
			<Outlet />
		</div>
	);
}

export default ShopLayout;

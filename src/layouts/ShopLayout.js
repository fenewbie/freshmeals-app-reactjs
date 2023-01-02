import Container from '@components/UI/Container';
import { Outlet } from 'react-router-dom';

function ShopLayout() {
	return (
		<Container>
			<Outlet />
		</Container>
	);
}

export default ShopLayout;

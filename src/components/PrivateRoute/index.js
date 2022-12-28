import Button from '@components/UI/Button';
import { TbArrowBigLeftLines } from 'react-icons/tb';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
	const navigate = useNavigate();
	const currentUser = useSelector((state) => state.auth.user);

	if (!currentUser) {
		return (
			<section className="flex items-center justify-center py-6">
				<div className="container">
					<h2>Permission Denied.</h2>
					<p>Please sign in or sign up to view the page.</p>
					<br />
					<Button
						btn="card"
						className="mx-auto bg-greenBtn p-2 rounded mt-5"
						onClick={() => navigate('/login')}
					>
						<span className="flex items-center">
							<TbArrowBigLeftLines className="text-xl mr-2" />
							BACK TO SIGNIN
						</span>
					</Button>
				</div>
			</section>
		);
	}
	return (
		<>
			<Outlet />
			{children}
		</>
	);
};

export default PrivateRoute;
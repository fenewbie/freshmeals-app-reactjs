import Button from '@components/UI/Button';
import { TbArrowBigLeftLines } from 'react-icons/tb';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

const PrivateRoute = () => {
	const navigate = useNavigate();

	const { userInfo } = useSelector((state) => state.aith);
	if (!userInfo) {
		return (
			<section className="h-4/5">
				<div className="container">
					<h2>Permission Denied.</h2>
					<p>Please sign in or sign up to view the page.</p>
					<br />
					<Button
						btn="card"
						className="mx-auto bg-greenBtn p-2 rounded mt-5"
						onClick={() => navigate('/')}
					>
						<span className="flex items-center">
							<TbArrowBigLeftLines className="text-xl mr-2" />
							BACK TO HOME
						</span>
					</Button>
				</div>
			</section>
		);
	}
	return <Outlet />;
};

export default PrivateRoute;

import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TbArrowBigLeftLines } from 'react-icons/tb';

import Button from '@components/UI/Button';
import * as cs from '@utils/constants';

const PrivateRoute = ({ type, children }) => {
	const navigate = useNavigate();
	const currentUser = useSelector((state) => state.auth.user);

	if (!currentUser) {
		switch (type) {
			case 'admin':
				return (
					<p className="mt-3 text-red-600 italic font-light text-xs">
						Please sign in or sign up to discover our products!
					</p>
				);
			default:
				return (
					<section className="container py-28">
						<img
							alt="permission_denied"
							src={cs.denied}
							className="h-20 w-20 mx-auto mb-8"
						/>
						<h2 className="font-bold lg:text-4xl md:text-3xl text-2xl text-center">
							Permission Denied
						</h2>
						<p className="text-center mt-5">
							You don't have permissions to access this page. <br />
							Please sign in or sign up.
						</p>
						<div className="mt-8">
							<Button
								btn="card"
								className="mx-auto bg-greenBtn p-2 rounded mt-3"
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
	}
	return (
		<>
			<Outlet />
			{children}
		</>
	);
};

export default PrivateRoute;

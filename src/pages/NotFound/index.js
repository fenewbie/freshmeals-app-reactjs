import { useNavigate, useRouteError } from 'react-router-dom';
import { TbArrowBigLeftLines } from 'react-icons/tb';

import Button from '@components/UI/Button';
import Footer from '@layouts/Footer';
import CommonSection from '@components/CommonSection';
import Header from '@layouts/Header';

function NotFound() {
	const error = useRouteError();
	const navigate = useNavigate();
	const handleClick = () => navigate('/');

	return (
		<div className="w-full mx-auto flex flex-col space-y-1 p-0 m-0">
			<CommonSection title="404 Page">
				<Header />
			</CommonSection>
			<div className="px-4 sm:px-8 md:px-8 lg:px-8 xl:px-8 mx-auto">
				<div className="text-center my-20">
					<h1 className="lg:text-[18rem] md:text-8xl text-7xl font-extrabold text-greenBtn">
						404 
					</h1>
					<h2 className="lg:text-5xl md:text-2xl font-bold uppercase lg:my-10 my-6">
						OOPS! page not found!
					</h2>
					<p className="mt-7">
						We are sorry! But the page you are looking for does not exist. It
						might have been moved or deleted.
					</p>
					<p className="text-xl text-red-700 font-bold">
						<i>{error.statusText || error.message}</i>
					</p>
					<Button
						btn="card"
						className="mx-auto bg-greenBtn p-2 rounded mt-5"
						onClick={handleClick}
					>
						<span className="flex items-center">
							<TbArrowBigLeftLines className="text-xl mr-2" />
							BACK TO HOME
						</span>
					</Button>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default NotFound;

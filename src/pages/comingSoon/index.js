import { Link } from 'react-router-dom';
import { SubscribeForm } from '@components/Form';
import Timer from '@features/HomeScreen/CountDownSection/Timer';

export default function ComingSoon() {
	return (
		<div className="bg-coming-soon bg-cover bg-center bg-no-repeat  px-4 py-24 md:h-screen md:overflow-y-scroll flex">
			<div className=" m-auto flex flex-col items-center">
				<div className="text-center">
					<h6 className="text-green-600 bold font-raj text-lg mb-3">
						Welcome to you
					</h6>
					<h1 className="font-raj lg:text-7xl md:text-6xl text-5xl text-white">
						We Are Coming Soon
					</h1>
					<h5 className="text-green-600 bold font-raj text-lg mt-3">
						July 26, 2023
					</h5>
				</div>
				<Timer
					day={12}
					type={true}
				/>

				<div className="mt-14 mb-10  shrink w-full">
					<h3 className="mb-10 text-center font-raj md:text-2xl text-xl text-white">
						Notify me when we launch
					</h3>
					<SubscribeForm />
				</div>
				<Link
					to="/contact"
					className="btn-animated uppercase text-white "
				>
					<span className="btn-animated-text max-md:text-sm">
						Contact Us
					</span>
				</Link>
			</div>
		</div>
	);
}

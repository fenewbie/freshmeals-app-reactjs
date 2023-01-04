import { SubscribeForm } from '@components/Form';
import { Link } from 'react-router-dom';
import Timer from '@features/HomeScreen/CountDownSection/Timer';

export default function ComingSoon() {
	return (
		<div className="bg-coming-soon bg-cover bg-center bg-no-repeat lg:h-[750px] h-[800px] px-0 -mt-1">
			<div className="flex flex-col items-center justify-center px-4">
				<div className="text-center mt-14">
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
				<Timer day={12} type={true} />

				<div className="my-14  shrink lg:w-2/4 md:w-2/3 w-full">
					<h3 className="mb-10 text-center font-raj md:text-2xl text-xl text-white">
						Notify me when we launch
					</h3>
					<SubscribeForm />
				</div>
				<div className="mb-14 ">
					<Link to="/contact" className="btn-animated uppercase text-white">
						<span className="btn-animated-text max-md:text-sm">Contact Us</span>
					</Link>
				</div>
			</div>
		</div>
	);
}

import { SubscribeForm } from '@components/Form';
import Timer from '@features/HomeScreen/CountDownSection/Timer';
import { Link } from 'react-router-dom';

const Gallery = () => {
	return (
		<div className="bg-comming-soon bg-cover bg-center bg-no-repeat h-[750px] px-0 -mt-1">
			<div className="flex flex-col items-center justify-center ">
				<div className="text-center mt-14">
					<h6 className="text-green-600 bold font-raj text-lg mb-3">
						Welcome to you
					</h6>
					<h1 className="font-raj text-7xl text-white">We Are Coming Soon</h1>
					<h5 className="text-green-600 bold font-raj text-lg mt-3">
						July 26, 2023
					</h5>
				</div>
				<Timer day={162} type={true}/>

				<div className="my-14 shrink w-2/4">
					<h3 className="mb-10 text-center font-raj text-2xl text-white">
						Notify me when we launch
					</h3>
					<SubscribeForm />
				</div>
				<div className="mb-14 ">
					<Link to="contact" className="uppercase text-white">
						Contact Us
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Gallery;

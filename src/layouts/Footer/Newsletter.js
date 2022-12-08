import * as cs from '../../utils/constants';
import SubscribeForm from '@components/Form/SubscribeForm';

const Newsletter = () => {
	return (
		<div className="w-full h-auto p-2 md:col-span-2 lg:col-span-2 xl:col-span-1">
			<div className="w-full">
				<h4 className="text-xl font-bold mb-6">Newsletter</h4>
				<p className="mb-5">
					Subscribe to our weekly Newsletter and receive updates via email.
				</p>
				<div className="w-full mb-6">
					<SubscribeForm isFooter />
				</div>
			</div>
			<div className="w-full pb-14">
				<h5 className="text-base font-bold mb-6">We Accept</h5>
				<div className="w-2/3 sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-2/3">
					<img src={cs.paymentMethod} alt="payment" />
				</div>
			</div>
		</div>
	);
};

export default Newsletter;

import ContactForm from '@components/Form/ContactForm';
import Card from '@components/UI/Card';
import Loader from '../../components/UI/Loader';
import * as cs from '../../utils/constants';

const Contact = () => {
	return (
		<div
			title="Contact Us"
			className="container mx-auto py-28 px-6"
		>
			<div className="flex gap-8 mb-20 max-md:flex-wrap">
				<Card className="text-center md:basis-1/3 basis-full border-2 rounded-md py-12">
					<img
						src={cs.email}
						className="mx-auto"
					/>
					<h2 className="font-semibold lg:text-2xl text-xl mt-6">
						Email Address
					</h2>
					<span className="mt-3 block">freshmeals@webmail.com</span>
				</Card>
				<Card className="text-center md:basis-1/3  basis-full border-2 rounded-md py-12">
					<img
						src={cs.phone}
						className="mx-auto"
					/>
					<h2 className="font-semibold lg:text-2xl text-xl mt-6">
						Phone Number
					</h2>
					<span className="mt-3 block">
						+0123-456789
						<br />
						+987-6543210
					</span>
				</Card>
				<Card className="text-center md:basis-1/3  basis-full border-2 rounded-md py-12">
					<img
						src={cs.locate}
						className="mx-auto"
					/>
					<h2 className="font-semibold lg:text-2xl text-xl mt-6">
						Offical Address
					</h2>
					<span className="mt-3 block">
						18/A, New Born Town Hall <br /> New York, US
					</span>
				</Card>
			</div>
			<div className="shadow-[0_0_5px_0_rgba(0,0,0,0.1)] px-6 pt-12 pb-16 rounded-md">
				<ContactForm />
			</div>
		</div>
	);
};

export default Contact;

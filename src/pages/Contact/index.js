import ContactForm from '@components/Form/ContactForm';
import Card from '@components/UI/Card';
import * as cs from '@utils/constants';

const Contact = () => {
	return (
		<div className="mb-28">
			<div className="container my-28">
				<div title="Contact Us">
					<div className="flex gap-8 mb-20 max-lg:flex-wrap justify-center">
						<Card className="text-center lg:basis-1/3 basis-full border-2 rounded-md py-12">
							<img
								alt="email"
								src={cs.email}
								className="mx-auto"
							/>
							<h2 className="font-semibold lg:text-2xl text-xl mt-6">
								Email Address
							</h2>
							<span className="mt-3 block">
								freshmeals@webmail.com
							</span>
						</Card>
						<Card className="text-center lg:basis-1/3  basis-full border-2 rounded-md py-12">
							<img
								alt="phone"
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
						<Card className="text-center lg:basis-1/3  basis-full border-2 rounded-md py-12">
							<img
								alt="offical address"
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
					<div className="shadow-[0_0_5px_0_rgba(0,0,0,0.1)] px-6 pt-12 pb-16 rounded-md bg-white relative z-10">
						<ContactForm />
					</div>
				</div>
			</div>
			<div className="h-[800px]">
				<iframe
					title="locate"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59495.23878484945!2d-97.27585638943323!3d37.69428176532606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87bafcbf966f3033%3A0xbbbbe2dcbe35057d!2sOlive%20Garden%20Italian%20Restaurant!5e0!3m2!1svi!2s!4v1671939193272!5m2!1svi!2s"
					width="100%"
					height="100%"
					allowFullScreen={true}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</div>
	);
};

export default Contact;

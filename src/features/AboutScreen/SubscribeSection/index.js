import SubscribeForm from '@components/Form/SubscribeForm';

function SubscribeSection() {
	return (
		<div className="bg-hero-image bg-center bg-no-repeat  text-white text-center grid lg:grid-cols-12 grid-cols-1">
			<div className="container py-28 lg:col-span-8 lg:col-start-3 ">
				<h2 className="text-2xl md:text-4xl font-bold capitalize font-raj ">
					we make your inbox better
				</h2>
				<p className="mt-5 mb-6 lg:px-20 ">
					Be first to know about our newsletter, blogs, offer, new
					products and exclusive access to pre-launch product pricing
					and more at FreshMeals.
				</p>
				<div className="h-14">
					<SubscribeForm />
				</div>
			</div>
		</div>
	);
}

export default SubscribeSection;

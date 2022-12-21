import CartTotal from '@components/Cart/CartTotal';
import CheckoutForm from '@components/Form/CheckoutForm';
import PaymentMethod from '@components/Form/PaymentMethod';
import { useSelector } from 'react-redux';

import { Form, Link } from 'react-router-dom';

export default function CheckoutScreen() {
	const cartItems = useSelector((state) => state.cart.items);
	const totalAmount = useSelector((state) => state.cart.totalAmount);
	return (
		<div className="container mx-auto py-24 px-6">
			<section>
				<p className="bg-sectionBg py-4 px-7 text-lg font-bold">
					<span className="">Returning customer ?</span>
					<Link to="/login" className="text-greenBtn">
						Click here to login
					</Link>
				</p>
				<p className="bg-sectionBg py-4 px-7 mt-7 text-lg font-bold">
					<span className="">Have a coupon ?</span>
					<button className="text-greenBtn">
						Click here to enter your code
					</button>
				</p>
			</section>
			<Form method="post">
				<section className="mt-14">
					<h4 className="font-bold md:text-2xl text-xl mb-8">
						Billing Details
					</h4>
					<CheckoutForm />
				</section>
				<section className="grid lg:grid-cols-12 grid-cols-1 gap-8 mt-20 ">
					<div className="lg:col-span-7 lg:pr-28">
						<h4 className="font-bold md:text-2xl text-xl mb-8">
							Payment Method
						</h4>
						<PaymentMethod />
					</div>
					<div className="lg:col-span-5 lg:w-full md:w-8/12 w-full ml-auto">
						<h4 className="font-bold md:text-2xl text-xl mb-8">Cart Totals</h4>
						<CartTotal items={cartItems} totalAmount={totalAmount} />
					</div>
				</section>
			</Form>
		</div>
	);
}

export const action = async ({ request }) => {
	const formData = Object.fromEntries(await request.formData());
	console.log(formData);
	return { checkout: 'ok' };
};

import { Link, useSubmit } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Formik, Form } from 'formik';

import CartTotal from '@components/Cart/CartTotal';
import CheckoutForm from '@components/Form/CheckoutForm';
import PaymentMethod from '@components/Form/PaymentForm';
import { CheckoutSchema } from '@components/Form/ValidationSchema';


export default function CheckoutScreen() {
	const submit = useSubmit();

	const cartItems = useSelector((state) => state.cart.items);
	const totalAmount = useSelector((state) => state.cart.totalAmount);

	const initialValues = {
		firstname: '',
		lastname: '',
		email: '',
		phone: '',
		selectOption: '',
		address1: '',
		address2: '',
		city: '',
		state: '',
		zip: '',
		createaccount: '',
		notes: '',
		paymentmethod: '',
	};

	return (
		<div className="container my-28">
			<section>
				<p className="bg-sectionBg py-4 px-7 text-lg font-bold">
					<span className="">Returning customer ? </span>
					<Link
						to="/login"
						className="text-greenBtn"
					>
						Click here to login
					</Link>
				</p>
				<p className="bg-sectionBg py-4 px-7 mt-7 text-lg font-bold">
					<span className="">Have a coupon ? </span>
					<button className="text-greenBtn">
						Click here to enter your code
					</button>
				</p>
			</section>
			<Formik
				initialValues={initialValues}
				validationSchema={CheckoutSchema}
				onSubmit={(values, actions) => {
					submit(values, { method: 'post', action: '/checkout' });
					alert(
						'Form submitted successfully! Thank you for your information!'
					);
					actions.resetForm();
				}}
			>
				<Form>
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
							<h4 className="font-bold md:text-2xl text-xl mb-8">
								Cart Totals
							</h4>
							<CartTotal
								items={cartItems}
								totalAmount={totalAmount}
							/>
						</div>
					</section>
				</Form>
			</Formik>
		</div>
	);
}

export const action = async ({ request }) => {
	const formData = Object.fromEntries(await request.formData());
	console.log('formData', formData);
	return { checkout: 'ok' };
};

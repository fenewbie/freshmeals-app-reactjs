import Button from '@components/UI/Button';
import { ErrorMessage, Field, useField } from 'formik';
import { useState } from 'react';
import TextError from './FormikControl/TextError';

export default function PaymentMethod() {
	const [indexActive, setIndexActive] = useState();

	const handleToggleAccordion = (index) => {
		setIndexActive((preIndex) => {
			return preIndex === index ? undefined : index;
		});
	};
	return (
		<div className="w-full">
			<div className="w-full border">
				<div
					className="border-b  px-6 py-4"
					onClick={() => handleToggleAccordion(0)}
				>
					<div className="flex items-center gap-2">
						<Field
							id="check-payments"
							name="paymentmethod"
							type="radio"
							value="check-payments"
						/>
						<label className="font-bold">Check payments</label>
					</div>

					<span
						className={`text-sm block px-6   transition-all duration-300 overflow-hidden ${
							indexActive === 0
								? 'max-h-[100px]  py-2 shadow-sm mt-4'
								: 'max-h-0 py-0'
						}`}
					>
						Please send a check to Store Name, Store Street, Store
						Town, Store State / County, Store Postcode.
					</span>
				</div>

				<div
					className="border-b  px-6 py-4"
					onClick={() => handleToggleAccordion(1)}
				>
					<div className="flex items-center gap-2">
						<Field
							id="cash-on-delivery"
							value="cash-on-delivery"
							name="paymentmethod"
							type="radio"
						/>
						<label className="font-bold">Cash on delivery</label>
					</div>
					<span
						className={`text-sm block px-6  transition-all duration-300 overflow-hidden ${
							indexActive === 1
								? 'max-h-[100px]  py-2 shadow-sm mt-4'
								: 'max-h-0 py-0'
						}`}
					>
						Pay with cash upon delivery.
					</span>
				</div>

				<div
					className="px-6 py-4"
					onClick={() => handleToggleAccordion(2)}
				>
					<div className="flex  items-center gap-2">
						<Field
							id="paypal"
							value="paypal"
							name="paymentmethod"
							type="radio"
						/>
						<label className="font-bold">Paypal</label>
						<img
							src="https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/icons/payment-3.png"
							alt="payment"
							className="w-25 h-8 object-cover"
						/>
					</div>
					<span
						className={`text-sm block px-6   transition-all duration-300 overflow-hidden ${
							indexActive === 2
								? 'max-h-[100px]  py-2 shadow-sm mt-4'
								: 'max-h-0 py-0'
						}`}
					>
						Pay via PayPal; you can pay with your credit card if you
						don’t have a PayPal account.
					</span>
				</div>
			</div>
			<ErrorMessage
				name="paymentmethod"
				component={TextError}
			/>

			<div>
				<p className="text-sm mt-8">
					Your personal data will be used to process your order,
					support your experience throughout this website, and for
					other purposes described in our privacy policy.
				</p>
				<Button
					className="group relative mt-10 flex items-center justify-center w-full h-10  md:w-[150px] lg:h-14 md:h-12 bg-[#80B500]  hover:text-gray-900 hover:bg-black focus:outline-none focus:z-10 focus:ring focus:ring-blue-100 after:content-[''] after:absolute after:top-0 after:left-0 after:bg-white after:w-[0%] after:h-full after:transition-all after:duration-[400ms] after:ease-in-out hover:after:w-full hover:after:border hover:after:border-gray-900"
					type="submit"
				>
					<span className="group-hover:text-neutral-700 text-sm font-bold text-white uppercase relative z-10 m-auto">
						place order
					</span>
				</Button>
			</div>
		</div>
	);
}

import Button from '@components/UI/Button';
import { Checkbox, Label } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function PaymentMethod() {
	return (
		<>
			<div className="flex flex-col gap-4 border p-3 w-3/6" id="checkbox">
				<div className="flex gap-2">
					<div className="flex h-5 items-center">
						<Checkbox id="shipping" />
					</div>
					<div className="flex flex-col">
						<Label htmlFor="shipping">Check payments</Label>
						<div className="text-gray-500 dark:text-gray-300">
							<span className="text-xs font-normal">
								Please send a check to Store Name, Store Street, Store Town,
								Store State / County, Store Postcode.
							</span>
						</div>
					</div>
				</div>
				<div className="flex items-center gap-2">
					<Checkbox id="disabled" disabled={true} />
					<Label htmlFor="disabled" disabled={true}>
						Cash on delivery
					</Label>
					<div className="text-gray-500 dark:text-gray-300">
						<span className="text-xs font-normal">
							Pay with cash upon delivery
						</span>
					</div>
				</div>
				<div className="flex items-center gap-2">
					<Checkbox id="disabled" disabled={true} />
					<Label htmlFor="disabled" disabled={true}>
						Paypal
					</Label>
					<img
						src="https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/icons/payment-3.png"
						alt="payment"
						className="w-25 h-8 object-cover"
					/>
					<div className="text-gray-500 dark:text-gray-300">
						<span className="text-xs font-normal">
							Pay via PayPal; you can pay with your credit card if you don’t
							have a PayPal account.
						</span>
					</div>
				</div>
			</div>
			<div>
				<p>
					Your personal data will be used to process your order, support your
					experience throughout this website, and for other purposes described
					in our privacy policy.
				</p>
				<Link className="group relative  mt-14 flex items-center justify-center w-full h-10  md:w-[150px] lg:h-14 md:h-12 bg-[#80B500]  hover:text-gray-900 hover:bg-black focus:outline-none focus:z-10 focus:ring focus:ring-blue-100 after:content-[''] after:absolute after:top-0 after:left-0 after:bg-white after:w-[0%] after:h-full after:transition-all after:duration-[400ms] after:ease-in-out hover:after:w-full hover:after:border hover:after:border-gray-900">
					<span className="group-hover:text-neutral-700 text-sm font-bold text-white uppercase relative z-10 m-auto">
						place order
					</span>
				</Link>
			</div>
		</>
	);
}

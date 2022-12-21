import Button from '@components/UI/Button';
import { Label, Radio } from 'flowbite-react';

export default function PaymentMethod() {
	return (
		<div className="w-full">
			<div
				className="w-full flex flex-col gap-4 border p-6"
				id="checkbox"
			>
				<div className="flex gap-2">
					<div className="flex h-5 items-center relative top-[2px]">
						<Radio
							id="shipping"
							name="shipping"
						/>
					</div>
					<div className="">
						<Label htmlFor="shipping">Check payments</Label>
						<div className="text-gray-500 dark:text-gray-300">
							<span className="text-xs font-normal">
								Please send a check to Store Name, Store Street,
								Store Town, Store State / County, Store
								Postcode.
							</span>
						</div>
					</div>
				</div>
				<div className="flex gap-2">
					<div className="relative top-[2px]">
						<Radio
							id="disabled"
							disabled={false}
						/>
					</div>
					<div className="text-gray-500">
						<Label
							htmlFor="disabled"
							disabled={true}
						>
							Cash on delivery
						</Label>
						<span className="text-xs font-normal block">
							Pay with cash upon delivery
						</span>
					</div>
				</div>
				<div className="flex gap-2">
					<div className="relative top-[2px]">
						<Radio
							id="disabled"
							disabled={true}
						/>
					</div>
					<div className="text-gray-500">
						<div>
							<Label
								htmlFor="disabled"
								disabled={true}
							>
								Paypal
							</Label>
							<img
								src="https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/icons/payment-3.png"
								alt="payment"
								className="w-25 h-8 object-cover"
							/>
						</div>
						<span className="text-xs font-normal">
							Pay via PayPal; you can pay with your credit card if
							you don’t have a PayPal account.
						</span>
					</div>
				</div>
			</div>
			<div>
				<p className="text-sm mt-8">
					Your personal data will be used to process your order,
					support your experience throughout this website, and for
					other purposes described in our privacy policy.
				</p>
				<Button className="group relative mt-10 flex items-center justify-center w-full h-10  md:w-[150px] lg:h-14 md:h-12 bg-[#80B500]  hover:text-gray-900 hover:bg-black focus:outline-none focus:z-10 focus:ring focus:ring-blue-100 after:content-[''] after:absolute after:top-0 after:left-0 after:bg-white after:w-[0%] after:h-full after:transition-all after:duration-[400ms] after:ease-in-out hover:after:w-full hover:after:border hover:after:border-gray-900">
					<span className="group-hover:text-neutral-700 text-sm font-bold text-white uppercase relative z-10 m-auto">
						place order
					</span>
				</Button>
			</div>
		</div>
	);
}

import Input from './Input';

export default function CheckoutForm() {
	return (
		<div>
			<Input
				type="text"
				placeholder="First name"
				className="mt-8 border w-2/6"
			/>
			<Input
				type="text"
				placeholder="First name"
				className="mt-8 border w-2/6"
			/>
			<Input
				type="email"
				placeholder="Your email"
				className="mt-8 border w-2/6"
			/>
			<Input
				type="text"
				placeholder="First name"
				className="mt-8 border w-2/6"
			/>
			<p>Order Notes (optional)</p>
			<Input
				type="textarea"
				rows={6}
				className="border w-2/6"
				placeholder="Notes about your order, e.g. special notes for delivery"
			/>
		</div>
	);
}

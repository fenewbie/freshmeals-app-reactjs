import CartTotal from '@components/Cart/CartTotal';
import CheckoutForm from '@components/Form/CheckoutForm';
import PaymentMethod from '@components/Form/PaymentMethod';

export default function CheckoutScreen() {
	return (
		<div>
			<section>
				<p>
					Returning customer ? <span>Click here to login</span>
				</p>
				<p>
					Hvae a coupon ? <span>Click here to enter your code</span>
				</p>
			</section>
			<section>
				<h4>Billing Details</h4>
				<CheckoutForm />
			</section>
			<section className="flex flex-row gap-x-32 py-10">
				<div >
					<h5>Payment Method</h5>
					<PaymentMethod />
				</div>
				<div>
					<h5>Cart Totals</h5>
                    <CartTotal />
				</div>
			</section>
		</div>
	);
}

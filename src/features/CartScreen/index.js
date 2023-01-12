import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@components/UI/Button';
import CartItem from './CartItem';

function CartScreen() {
	const cartItems = useSelector((state) => state.cart.items);
	const totalAmount = useSelector((state) => state.cart.totalAmount);

	return (
		<div className="container my-28">
			{cartItems.length === 0 ? (
				<div className="flex flex-col items-center">
					<p className="text-xl font-bold">No item in your cart!</p>
					<Link
						to="../shop"
						className="flex text-xl m-3 px-6 py-3 shadow border hover:bg-greenBtn hover:text-white hover:underline "
					>
						<span>Back to Shop</span>
					</Link>
				</div>
			) : (
				<>
					{cartItems.map((item, index) => (
						<CartItem
							item={item}
							key={index}
							background={index % 2 === 0 ? false : true}
						/>
					))}
					<div className="flex justify-end md:py-5 max-md:mt-7">
						<Button
							btn="card"
							className="min-w-[150px] max-md:h-[42px] max-md:text-sm"
							type="link"
							link="/shop"
						>
							Continue Shopping
						</Button>
					</div>

					<div className="lg:w-[450px] lg:ml-auto mt-12">
						<h3 className="font-bold mb-4 text-xl">Cart Total</h3>
						<table className="w-full">
							<tbody>
								<tr className="border-t border-b bg-[#F7F8FA] h-14">
									<td className="px-6">Cart Subtotal</td>
									<td className=" px-6 text-right">
										${totalAmount.toFixed(2)}
									</td>
								</tr>
								<tr className="border-t border-b bg-[#FAFAFA] h-14">
									<td className="px-6">Shipping and Handing</td>
									<td className=" px-6 text-right">$0.00</td>
								</tr>
								<tr className="border-t border-b bg-[#F7F8FA] h-14">
									<td className="px-6">Vat</td>
									<td className=" px-6 text-right">$0.00</td>
								</tr>
								<tr className="border-t border-b bg-[#FAFAFA] h-14">
									<td className="px-6">
										<h3 className="font-bold">Order Total</h3>
									</td>
									<td className="px-6 text-right">
										<h3 className="font-bold">${totalAmount.toFixed(2)}</h3>
									</td>
								</tr>
							</tbody>
						</table>
						<Link
							className="btn-animated mt-10 w-full max-md:py-2"
							to="/checkout"
						>
							<span className="btn-animated-text max-md:text-sm">
								Proceed to checkout
							</span>
						</Link>
					</div>
				</>
			)}
		</div>
	);
}

export default CartScreen;

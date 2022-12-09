import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../components/UI/Button';

import CartItem from './CartItem';

function CartScreen() {

	const cartItems = useSelector((state) => state.cart.items);
	console.log(cartItems);
	const totalAmount = useSelector((state) => state.cart.totalAmount);
	const totalQuantity = useSelector((state) => state.cart.totalQuantity);
	console.log(totalAmount)
	console.log(totalQuantity);

	return (
		<div>
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
					{cartItems.map((item) => (
						<CartItem item={item} key={item.id} />
					))}
					<div className="flex justify-end py-5">
						<Button btn="card" className="min-w-[150px]">
							Update Cart
						</Button>
					</div>

					<div className="lg:w-[450px] lg:ml-auto mt-12">
						<h3 className="font-bold mb-4 text-xl">Cart Total</h3>
						<table className="w-full">
							<tbody>
								<tr className="border-t border-b bg-[#F7F8FA] h-14">
									<td className="px-6">Cart Subtotal</td>
									<td className=" px-6 text-right">${totalAmount}</td>
								</tr>
								<tr className="border-t border-b bg-[#FAFAFA] h-14">
									<td className="px-6">Shipping and Handing</td>
									<td className=" px-6 text-right">$15.00</td>
								</tr>
								<tr className="border-t border-b bg-[#F7F8FA] h-14">
									<td className="px-6">Vat</td>
									<td className=" px-6 text-right">$10.00</td>
								</tr>
								<tr className="border-t border-b bg-[#FAFAFA] h-14">
									<td className="px-6">
										<h3 className="font-bold">Order Total</h3>
									</td>
									<td className="px-6 text-right">
										<h3 className="font-bold">{totalAmount}</h3>
									</td>
								</tr>
							</tbody>
						</table>
						<Button btn="card" className="w-full mt-5">
							Proceed to checkout
						</Button>
					</div>
				</>
			)}
		</div>
	);
}

export default CartScreen;

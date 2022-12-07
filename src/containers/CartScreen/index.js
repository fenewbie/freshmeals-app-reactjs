import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Quantity } from '../../components/Cart/Quantity';
import Button from '../../components/UI/Button';
import { cartActions } from '../../redux/cart/cartSlice';

function CartScreen() {
	const cartItems = useSelector((state) => state.cart.items);
	const totalAmount = useSelector((state) => state.cart.totalAmount);

	const dispatch = useDispatch();
	const increaseCart = (id) => {
		dispatch(cartActions.increaseQuantity(id));
	};
	const decreaseCart = (id) => {
		dispatch(cartActions.decrementQuantity(id));
	};
	const deleteItem = (id) => {
		dispatch(cartActions.removeItem(id));
	};
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
					<table className="w-full text-center">
						<tbody>
							{cartItems.map((product) => {
								const { id, title, image, price, quantity, totalPrice } =
									product;
								return (
									<tr
										className={`border-t border-b ${
											parseInt(id) % 2 === 0 ? 'max-md:bg-sectionBg' : ''
										}`}
										key={id}
									>
										<td className="max-md:block max-md:border-b py-5 md:w-20">
											<button onClick={deleteItem}>x</button>
										</td>
										<td className="max-md:block max-md:border-b py-5">
											<img
												src={image}
												alt="product"
												className="h-28 w-28 object-contain mx-auto"
											/>
										</td>
										<td className="max-md:block max-md:border-b py-5">
											<h3 className="font-bold text-[18px]">{title}</h3>
										</td>
										<td className="max-md:block max-md:border-b py-5">
											<span>${price}</span>
										</td>
										<td className="max-md:block max-md:border-b py-5">
											<div className="h-14">
												<Quantity
													className="justify-center"
													decreaseCart={decreaseCart}
													increaseCart={increaseCart}
													quantity={quantity}
												/>
											</div>
										</td>
										<td className="max-md:block max-md:border-b py-5">
											<h3 className="font-bold text-[18px]">{totalPrice}</h3>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
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
									<td className=" px-6 text-right">
										${totalAmount.toFixed(2)}
									</td>
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
										<h3 className="font-bold">{totalAmount + 15.0 + 10.0}</h3>
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

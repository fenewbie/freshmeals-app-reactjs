import { useDispatch } from 'react-redux';
import { Quantity } from '@components/Cart/Quantity';
import { cartActions } from '@store/cart/cartSlice';

export default function CartItem({ item }) {
	const { id, title, image, quantity, price, totalPrice } = item;
	const dispatch = useDispatch();

	const incrementItem = () => {
		dispatch(cartActions.incrementQuantity(id));
	};

	const decreaseItem = () => {
		dispatch(cartActions.decrementQuantity(id));
	};

	const deleteItem = () => {
		dispatch(cartActions.removeItem(id));
	};
	return (
		<table className="w-full text-center">
			<tbody>
				<tr
					className={`border-t border-b ${
						parseInt(id) % 2 === 0 ? 'max-md:bg-sectionBg' : ''
					}`}
				>
					<td className="max-md:block max-md:border-b py-5 md:w-20">
						<button onClick={deleteItem}>x</button>
					</td>
					<td className="max-md:block max-md:border-b py-5">
						<img
							src={image}
							alt={title}
							className="h-28 w-28 object-contain mx-auto"
						/>
					</td>
					<td className="max-md:block max-md:border-b py-5">
						<h3 className="font-bold text-[18px]">{title}</h3>
					</td>
					<td className="max-md:block max-md:border-b py-5">
						{quantity} x <span>$ {price}</span>
					</td>
					<td className="max-md:block max-md:border-b py-5">
						<div className="h-14">
							<Quantity
								className="justify-center"
								decreaseItem={decreaseItem}
								incrementItem={incrementItem}
								quantity={quantity}
							/>
						</div>
					</td>
					<td className="max-md:block max-md:border-b py-5">
						<h3 className="font-bold text-[18px]">{totalPrice}</h3>
					</td>
				</tr>
			</tbody>
		</table>
	);
}

import { useDispatch } from 'react-redux';
import { Quantity } from '@components/Cart/Quantity';
import { cartActions } from '@store/cart/cartSlice';
import { Link } from 'react-router-dom';

export default function CartItem({ item, background }) {
	const { id, title, image, quantity, discount, totalPrice } = item;
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
		<table className="w-full">
			<tbody>
				<tr
					className={`border-t border-b ${
						background ? 'max-md:bg-sectionBg' : ''
					}`}
				>
					<td className="max-md:block max-md:border-b md:w-10 text-center py-5">
						<button
							onClick={deleteItem}
							className="text-lg hover:text-red-500"
						>
							x
						</button>
					</td>
					<td className="max-md:block max-md:border-b md:w-36 h-36 py-5">
						<img
							src={image}
							alt={title}
							className="h-full object-contain max-md:mx-auto"
						/>
					</td>
					<td className="max-md:block max-md:border-b max-md:text-center py-5">
						<Link to={`/shop/${id}`}>
							<h3 className="font-bold text-lg">{title}</h3>
						</Link>
					</td>
					<td className="max-md:block max-md:border-b md:w-32 text-center py-5">
						{quantity} x <span>$ {discount.toFixed(2)}</span>
					</td>
					<td className="max-md:block max-md:border-b md:w-40 h-full py-5">
						<Quantity
							className="justify-center"
							decreaseItem={decreaseItem}
							incrementItem={incrementItem}
							quantity={quantity}
						/>
					</td>
					<td className="max-md:block max-md:border-b md:w-32 text-center py-5">
						<h3 className="font-bold text-[18px]">
							{totalPrice.toFixed(2)}
						</h3>
					</td>
				</tr>
			</tbody>
		</table>
	);
}

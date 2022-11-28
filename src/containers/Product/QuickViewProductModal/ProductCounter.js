import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../../components/UI/Button';
import { cartActions } from '../../../redux/cart/cartSlice';

const ProductCounter = (id) => {
	const cartQuantity = useSelector((state) => state.cart.cartTotalQuantity);
	const dispatch = useDispatch();
	const AddItemToCart = () => {
		dispatch(cartActions.addItemToCart());
	};
	const RemoveItemFromCart = () => {
		dispatch(cartActions.removeItemFromCart(id));
	};

	const AddToCart = () => {
		dispatch(cartActions.addToCart());
	};

	return (
		<form className="flex">
			<div className="flex  border-2 border-gray-300">
				<button
					className="inline-block h-12 w-12 border-r-2 border-gray-300"
					onClick={RemoveItemFromCart}
				>
					<AiOutlineMinus className="mx-auto" />
				</button>
				<p className="text-lg font-bold text-center h-12 w-24  focus:outline-greenBtn">
					{cartQuantity}
				</p>
				<button
					className="inline-block h-12 w-12 border-l-2 border-gray-300"
					onClick={AddItemToCart}
				>
					<AiOutlinePlus className="mx-auto" />
				</button>
			</div>
			<Button onClick={AddToCart}>Add to cart</Button>
		</form>
	);
};

export default ProductCounter;

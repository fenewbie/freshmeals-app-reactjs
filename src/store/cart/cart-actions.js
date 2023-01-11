import axios from 'axios';
import { cartActions } from './cartSlice';

export const fetchCartData = () => {
	return async (dispatch) => {
		const fetchData = async () => {
			const response = await axios.get(
				'https://freshmeals-reactjs-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json'
			);
			if (!response.ok) {
				throw new Error('Could not fetch cart data!');
			}
			const data = await response.data();

			return data;
		};

		try {
			const cartData = await fetchData();
			dispatch(
				cartActions.replaceCart({
					items: cartData.items || [],
					totalQuantity: cartData.totalQuantity,
					totalAmount: cartData.totalAmount.toFixed(2),
				})
			);
		} catch (error) {
			// console.log('Fetching cart data failed!', error);
		}
	};
};

export const sendCartData = (cart) => {
	return async () => {
		// console.log('Sending cart data!');

		const sendRequest = async () => {
			const response = await axios.put(
				'https://freshmeals-reactjs-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
				{
					items: cart.items,
					totalQuantity: cart.totalQuantity,
					totalAmount: cart.totalAmount.toFixed(2),
				}
			);

			if (!response.ok) {
				throw new Error('Sending cart data failed.');
			}
		};

		try {
			await sendRequest();
			console.log('Sent cart data successfully!');
		} catch (error) {
			// console.log('Fetching cart data failed!', error);
		}
	};
};

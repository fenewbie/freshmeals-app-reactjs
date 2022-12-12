import { cartActions } from './cartSlice';
import axios from 'axios';
import { toast } from 'react-toastify';

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
					totalAmount: cartData.totalAmount,
				})
			);
		} catch (error) {
			toast.error('Fetching cart data failed!', {
				position: toast.POSITION.TOP_CENTER,
			});
		}
	};
};

export const sendCartData = (cart) => {
	return async () => {
		toast.info('Sending cart data!', {
			position: toast.POSITION.TOP_CENTER,
		});

		const sendRequest = async () => {
			const response = await axios.put(
				'https://freshmeals-reactjs-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
				{
					items: cart.items,
					totalQuantity: cart.totalQuantity,
					totalAmount: cart.totalAmount,
				}
			);
			console.log('response from cart action', response);

			if (!response.ok) {
				throw new Error('Sending cart data failed.');
			}
		};

		try {
			await sendRequest();
			toast.success('Sent cart data successfully!', {
				position: toast.POSITION.TOP_CENTER,
			});
		} catch (error) {
			toast.error('Fetching cart data failed!', {
				position: toast.POSITION.TOP_CENTER,
			});
		}
	};
};

import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';
import axios from 'axios';

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
				})
			);
		} catch (error) {
			dispatch(
				uiActions.showNotification({
					status: 'error',
					title: 'Error!',
					message: 'Fetching cart data failed!',
				})
			);
		}
	};
};

export const sendCartData = (cart) => {
	return async (dispatch) => {
		dispatch(
			uiActions.showNotification({
				status: 'pending',
				title: 'Sending...',
				message: 'Sending cart data!',
			})
		);

		const sendRequest = async () => {
			const response = await axios.put(
				'https://freshmeals-reactjs-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
				{
					items: cart.items,
					totalQuantity: cart.totalQuantity,
				}
			);

			if (!response.ok) {
				throw new Error('Sending cart data failed.');
			}
		};

		try {
			await sendRequest();

			dispatch(
				uiActions.showNotification({
					status: 'success',
					title: 'Success!',
					message: 'Sent cart data successfully!',
				})
			);
		} catch (error) {
			dispatch(
				uiActions.showNotification({
					status: 'error',
					title: 'Error!',
					message: 'Sending cart data failed!',
				})
			);
		}
	};
};

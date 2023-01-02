import { createSlice } from '@reduxjs/toolkit';

/*
isShowingSuccessModal: type wishlist/cart
*/
const modalSlice = createSlice({
	name: 'modal',
	initialState: {
		isDisplay: false,
		isShowingCart: false,
		quickViewModal: {
			status: false,
			dataActive: null,
		},
		successModal: { status: false, type: null, dataActive: null },
		notification: null,
	},
	reducers: {
		toggleNavMobi(state) {
			state.isDisplay = !state.isDisplay;
			
		},
		toggleCart(state) {
			state.isShowingCart = !state.isShowingCart;
		},
		quickView(state, action) {
			state.quickViewModal = {
				status: action.payload.status,
				dataActive: action.payload.dataActive,
			};
		},
		successModal(state, action) {
			state.successModal = {
				status: action.payload.status,
				type: action.payload.type,
				dataActive: action.payload.dataActive,
			};
		},
	},
});

export const modalActions = modalSlice.actions;

export default modalSlice.reducer;

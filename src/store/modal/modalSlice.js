import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
	name: 'modal',
	initialState: {
		isDisplay: false,
		isShowingCart: false,
		// isShowingQuickViewModal: false,
		quickViewModal: {
			status: false,
			dataActive: null
		},
		isShowingSuccessModal: { status: false, type: null },
		notification: null
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
			state.isShowingSuccessModal = {
				status: action.payload.status,
				type: action.payload.type,
			};
		},
	},
});

export const modalActions = modalSlice.actions;

export default modalSlice.reducer;

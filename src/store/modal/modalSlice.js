import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
	name: 'modal',
	initialState: {
		isDisplay: false,
		isShowingQuickViewModal: false,
		isShowingSuccessModal: { status: false, type: null },
		notification: null
	},
	reducers: {
		toggleNavMobi(state) {
			state.isDisplay = !state.isDisplay;
		},
		quickView(state) {
			state.isShowingQuickViewModal = !state.isShowingQuickViewModal;
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

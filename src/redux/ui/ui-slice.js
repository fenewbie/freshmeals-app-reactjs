import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
	name: 'ui',
	initialState: {
		isDisplay: false,
		isShowingQuickViewModal: false,
		isShowingSuccessModal: { status: false, type: null },
		notification: null,
	},
	reducers: {
		toggleNavMobi(state) {
			state.isDisplay = !state.isDisplay;
		},
		// showNotification(state, action) {
		// 	state.notification = {
		// 		status: action.payload.status,
		// 		title: action.payload.title,
		// 		message: action.payload.message,
		// 	};
		// },
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

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;

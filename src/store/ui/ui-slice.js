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

import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
	name: 'ui',
	initialState: { isDisplay: false, notification: null },
	reducers: {
		toggleNavMobi(state) {
			state.isDisplay = !state.isDisplay;
		},
		showNotification(state, action) {
			state.notification = {
				status: action.payload.status,
				title: action.payload.title,
				message: action.payload.message,
			};
		},
	},
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;

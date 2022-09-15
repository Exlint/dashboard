import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { IUiState, IUiShowNotificationPayload } from '../interfaces/ui';

const initialState: IUiState = {
	isNotificationVisible: false,
	notificationType: null,
	notificationTitle: null,
	notificationMessage: null,
};

const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		showNotification(state, action: PayloadAction<IUiShowNotificationPayload>) {
			state.isNotificationVisible = true;
			state.notificationType = action.payload.notificationType;
			state.notificationTitle = action.payload.notificationTitle;
			state.notificationMessage = action.payload.notificationMessage;
		},
		closeNotification(state) {
			state.isNotificationVisible = false;
		},
	},
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { IAuthState, IAuthPayload } from '../interfaces/auth';

const initialState: IAuthState = {
	id: null,
	name: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		auth(state, action: PayloadAction<IAuthPayload>) {
			state.id = action.payload.id;
			state.name = action.payload.name;
		},
		logout(state) {
			state.id = null;
			state.name = null;
		},
	},
});

export const authActions = authSlice.actions;

export default authSlice.reducer;

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { IAuthState, IAuthPayload } from '../interfaces/auth';

const initialState: IAuthState = {
	isAuthenticated: null,
	id: null,
	name: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		auth(state, action: PayloadAction<IAuthPayload>) {
			state.isAuthenticated = true;
			state.id = action.payload.id;
			state.name = action.payload.name;
		},
		setUnauthenticated(state) {
			state.isAuthenticated = false;
		},
		logout(state) {
			state.id = null;
			state.name = null;
		},
	},
});

export const authActions = authSlice.actions;

export default authSlice.reducer;

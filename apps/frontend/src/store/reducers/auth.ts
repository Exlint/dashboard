import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { IAuthState, IAuthPayload } from '../interfaces/auth';

const initialState: IAuthState = {
	isAuthenticated: null,
	id: null,
	name: null,
	createdAt: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		auth(state, action: PayloadAction<IAuthPayload>) {
			state.isAuthenticated = true;
			state.id = action.payload.id;
			state.name = action.payload.name;
			state.createdAt = action.payload.createdAt;
		},
		setUnauthenticated(state) {
			state.isAuthenticated = false;
			state.id = null;
			state.name = null;
			state.createdAt = null;
		},
	},
});

export const authActions = authSlice.actions;

export default authSlice.reducer;

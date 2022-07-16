import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { IAuthState, ILoginPayload } from '../interfaces/auth';

const initialState: IAuthState = {
	id: null,
	name: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login(state, action: PayloadAction<ILoginPayload>) {
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

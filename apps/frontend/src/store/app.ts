import { configureStore } from '@reduxjs/toolkit';

import authReducer from './reducers/auth';

import authListenMiddleware from './middlewares/auth';

const store = configureStore({
	reducer: {
		auth: authReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authListenMiddleware.middleware),
	devTools: process.env.REACT_APP_NODE_ENV === 'development',
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;

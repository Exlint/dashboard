import { configureStore } from '@reduxjs/toolkit';

import authReducer from './reducers/auth';
import uiReducer from './reducers/ui';
import authListenMiddleware from './middlewares/auth';
import uiListenMiddleware from './middlewares/ui';

const store = configureStore({
	reducer: {
		auth: authReducer,
		ui: uiReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(authListenMiddleware.middleware, uiListenMiddleware.middleware),
	devTools: process.env.REACT_APP_NODE_ENV === 'development',
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;

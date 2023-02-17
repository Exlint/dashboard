import { configureStore } from '@reduxjs/toolkit';

import authReducer from './reducers/auth';
import uiReducer from './reducers/ui';
import compliancesReducer from './reducers/compliances';
import authListenMiddleware from './middlewares/auth';
import uiListenMiddleware from './middlewares/ui';

const store = configureStore({
	reducer: {
		auth: authReducer,
		ui: uiReducer,
		compliances: compliancesReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(authListenMiddleware.middleware, uiListenMiddleware.middleware),
	devTools: import.meta.env.DEV,
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;

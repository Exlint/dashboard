import { createStore, Reducer, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import * as groupActions from './actions/groups';
import * as fromGroups from './reducers/groups';
import * as userActions from './actions/user';
import * as fromUser from './reducers/user';
import { watchUser } from './sagas/user';

type reducerTypes = groupActions.GroupsTypes | userActions.UserTypes;

const sagaMiddleware = createSagaMiddleware();

const rootReducer: Reducer<AppState, reducerTypes> = combineReducers({
	groups: fromGroups.reducer,
	user: fromUser.reducer,
});

sagaMiddleware.run(watchUser);

export interface AppState {
	groups: fromGroups.State;
	user: fromUser.State;
}

export const store = createStore(rootReducer);

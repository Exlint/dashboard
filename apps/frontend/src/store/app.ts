import { createStore, Reducer, combineReducers } from 'redux';

import * as groupActions from './actions/groups';
import * as fromGroups from './reducers/groups';

import * as userActions from './actions/user';
import * as fromUser from './reducers/user';

type reducerTypes = groupActions.GroupsTypes | userActions.UserTypes;

const rootReducer: Reducer<AppState, reducerTypes> = combineReducers({
	groups: fromGroups.reducer,
	user: fromUser.reducer,
});

export interface AppState {
	groups: fromGroups.State;
	user: fromUser.State;
}

export const store = createStore(rootReducer);

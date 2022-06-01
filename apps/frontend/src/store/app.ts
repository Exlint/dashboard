import { createStore, Reducer, combineReducers } from 'redux';

import * as policiesActions from './actions/policies';
import * as fromPolicies from './reducers/policies';

import * as userActions from './actions/user';
import * as fromUser from './reducers/user';

type reducerTypes = policiesActions.PoliciesTypes | userActions.UserTypes;

const rootReducer: Reducer<AppState, reducerTypes> = combineReducers({
	policies: fromPolicies.reducer,
	user: fromUser.reducer,
});

export interface AppState {
	policies: fromPolicies.State;
	user: fromUser.State;
}

export const store = createStore(rootReducer);

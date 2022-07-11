import type { IUser } from '../../interfaces/user';
import * as actions from '../actions/user';

const initialState: State = null;

export type State = IUser | null;

export const reducer = (state: State = initialState, action: actions.UserTypes): State => {
	switch (action.type) {
		case actions.SET_USER:
			return action.payload;
		case actions.UNSET_USER:
			return null;
		default:
			return state;
	}
};

import type { IUser } from '../../interfaces/user';
import * as actions from '../actions/user';

const initialState: State = {
	email: null,
};

export interface State {
	email: IUser | null;
}

export const reducer = (state: State = initialState, action: actions.UserTypes): State => {
	switch (action.type) {
	case actions.SET_USER:
		return { ...state, email: action.payload.email };
	case actions.UNSET_USER:
		return { ...state, email: null };
	default:
		return state;
	}
};

import type { IUser } from '../../interfaces/user';

export const SET_USER = '[User] Set User';

export const UNSET_USER = '[User] Unset User';

export interface SetUser {
	type: typeof SET_USER;
	payload: { email: IUser };
}

export interface UnsetUser {
	type: typeof UNSET_USER;
}

export const setUser = (email: IUser): SetUser => {
	return {
		type: SET_USER,
		payload: { email },
	};
};

export const unsetUser = (): UnsetUser => {
	return {
		type: UNSET_USER,
	};
};

export type UserTypes = SetUser | UnsetUser;

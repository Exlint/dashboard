import { IPolicy } from '@/interfaces/policy';

import * as actions from '../actions/policies';

const initialState: State = {
	policies: null,
};

export interface State {
	policies: IPolicy[] | null;
}

export const reducer = (state: State = initialState, action: actions.PoliciesTypes): State => {
	switch (action.type) {
	case actions.INIT_POLICIES:
		return { ...state, policies: [] };
	case actions.RESET_POLICIES:
		return { ...state, policies: null };
	case actions.ADD_POLICY:
		return { ...state, policies: [...state.policies!, action.payload.policy] };
	case actions.REMOVE_POLICY:
		return {
			...state,
			policies: state.policies!.filter((policy: IPolicy) => policy.id !== action.payload.policyId),
		};
	default:
		return state;
	}
};

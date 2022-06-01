import type { IPolicy } from '@/interfaces/policy';

export const INIT_POLICIES = '[Policies] Init Policies';

export const RESET_POLICIES = '[Policies] Reset Policies';

export const ADD_POLICY = '[Policies] Add Policy';

export const REMOVE_POLICY = '[Policies] Remove Policy';

export interface InitPolicies {
	type: typeof INIT_POLICIES;
}

export interface ResetPolicies {
	type: typeof RESET_POLICIES;
}

export interface AddPolicy {
	type: typeof ADD_POLICY;
	payload: { policy: IPolicy };
}

export interface RemovePolicy {
	type: typeof REMOVE_POLICY;
	payload: { policyId: string };
}

export const initPolicies = (): InitPolicies => {
	return {
		type: INIT_POLICIES,
	};
};

export const addPolicy = (policy: IPolicy): AddPolicy => {
	return {
		type: ADD_POLICY,
		payload: { policy },
	};
};

export const removePolicy = (policyId: string): RemovePolicy => {
	return {
		type: REMOVE_POLICY,
		payload: { policyId },
	};
};

export type PoliciesTypes = AddPolicy | RemovePolicy | InitPolicies | ResetPolicies;

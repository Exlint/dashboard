/* eslint-disable max-lines */
import type { IGroup } from '@/interfaces/group';
import { IPolicy } from '@/interfaces/policy';
import { IRule } from '@/interfaces/rule';

export const ADD_GROUP = '[Groups] Add Group';

export const REMOVE_GROUP = '[Groups] Remove Group';

export const EDIT_GROUP_LABEL = '[Groups] Edit Group Label';

export const SET_GROUPS = '[Groups] Set Groups';

export const ADD_POLICY = '[Policies] Add Policy';

export const REMOVE_POLICY = '[Policies] Remove Policy';

export const EDIT_POLICY_LABEL = '[Policies] Edit Policy Label';

export const ADD_RULE = '[Rules] Add Rule';

export const REMOVE_RULE = '[Rules] Remove Rule';

export interface AddGroup {
	type: typeof ADD_GROUP;
	payload: { group: IGroup };
}

export interface RemoveGroup {
	type: typeof REMOVE_GROUP;
	payload: { groupId: string };
}

export interface EditGroupLabel {
	type: typeof EDIT_GROUP_LABEL;
	payload: { groupId: string; newLabel: string };
}

export interface SetGroups {
	type: typeof SET_GROUPS;
	payload: { groups: IGroup[] };
}

export interface AddPolicy {
	type: typeof ADD_POLICY;
	payload: { groupId: string; policy: IPolicy };
}

export interface RemovePolicy {
	type: typeof REMOVE_POLICY;
	payload: { groupId: string; policyId: string };
}

export interface EditPolicyLabel {
	type: typeof EDIT_POLICY_LABEL;
	payload: { groupId: string; policyId: string; newLabel: string };
}

export interface AddRule {
	type: typeof ADD_RULE;
	payload: { groupId: string; policyId: string; rule: IRule };
}

export interface RemoveRule {
	type: typeof REMOVE_RULE;
	payload: { groupId: string; policyId: string; ruleId: string };
}

export const addGroup = (group: IGroup): AddGroup => {
	return {
		type: ADD_GROUP,
		payload: { group },
	};
};

export const removeGroup = (groupId: string): RemoveGroup => {
	return {
		type: REMOVE_GROUP,
		payload: { groupId },
	};
};

export const editGroupLabel = (groupId: string, newLabel: string): EditGroupLabel => {
	return {
		type: EDIT_GROUP_LABEL,
		payload: { groupId, newLabel },
	};
};

export const setGroups = (groups: IGroup[]): SetGroups => {
	return {
		type: SET_GROUPS,
		payload: { groups },
	};
};

export const addPolicy = (groupId: string, policy: IPolicy): AddPolicy => {
	return {
		type: ADD_POLICY,
		payload: { groupId, policy },
	};
};

export const removePolicy = (groupId: string, policyId: string): RemovePolicy => {
	return {
		type: REMOVE_POLICY,
		payload: { groupId, policyId },
	};
};

export const editPolicyLabel = (groupId: string, policyId: string, newLabel: string): EditPolicyLabel => {
	return {
		type: EDIT_POLICY_LABEL,
		payload: { groupId, policyId, newLabel },
	};
};

export const addRule = (groupId: string, policyId: string, rule: IRule): AddRule => {
	return {
		type: ADD_RULE,
		payload: { groupId, policyId, rule },
	};
};

export const removeRule = (groupId: string, policyId: string, ruleId: string): RemoveRule => {
	return {
		type: REMOVE_RULE,
		payload: { groupId, policyId, ruleId },
	};
};

export type GroupsTypes =
	| AddGroup
	| RemoveGroup
	| EditGroupLabel
	| SetGroups
	| AddPolicy
	| RemovePolicy
	| EditPolicyLabel
	| AddRule
	| RemoveRule;

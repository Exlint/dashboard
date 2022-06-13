/* eslint-disable max-lines */
import { IGroup } from '@/interfaces/group';

import * as actions from '../actions/groups';

const initialState: State = {
	groups: [],
};

export interface State {
	groups: IGroup[];
}

export const reducer = (state: State = initialState, action: actions.GroupsTypes): State => {
	switch (action.type) {
		case actions.ADD_GROUP:
			return { ...state, groups: [...state.groups, action.payload.group] };
		case actions.REMOVE_GROUP:
			return {
				...state,
				groups: state.groups.filter((group) => group.id !== action.payload.groupId),
			};
		case actions.SET_GROUPS:
			return {
				...state,
				groups: action.payload.groups,
			};
		case actions.ADD_POLICY: {
			const groups = [...state.groups];
			const matchingGroupIndex = groups.findIndex((group) => group.id === action.payload.groupId);

			if (matchingGroupIndex === -1) {
				return state;
			}

			const newPolicies = [...groups[matchingGroupIndex]!.policies, action.payload.policy];
			const newGroup = { ...groups[matchingGroupIndex]!, policies: newPolicies };

			groups[matchingGroupIndex] = newGroup;

			return { ...state, groups };
		}
		case actions.REMOVE_POLICY: {
			const groups = [...state.groups];
			const matchingGroupIndex = groups.findIndex((group) => group.id === action.payload.groupId);

			if (matchingGroupIndex === -1) {
				return state;
			}

			const newPolicies = [
				...groups[matchingGroupIndex]!.policies.filter(
					(policy) => policy.id !== action.payload.policyId,
				),
			];

			const newGroup = { ...groups[matchingGroupIndex]!, policies: newPolicies };

			groups[matchingGroupIndex] = newGroup;

			return { ...state, groups };
		}

		case actions.EDIT_POLICY_LABEL: {
			const groups = [...state.groups];
			const matchingGroupIndex = groups.findIndex((group) => group.id === action.payload.groupId);

			if (matchingGroupIndex === -1) {
				return state;
			}

			const newPolicies = [
				{
					...groups[matchingGroupIndex]!.policies.find(
						(policy) => policy.id === action.payload.policyId,
					)!,
					label: action.payload.newLabel,
				},
			];

			const newGroup = { ...groups[matchingGroupIndex]!, policies: newPolicies };

			groups[matchingGroupIndex] = newGroup;

			return { ...state, groups };
		}

		case actions.ADD_RULE: {
			const groups = [...state.groups];
			const matchingGroupIndex = groups.findIndex((group) => group.id === action.payload.groupId);

			if (matchingGroupIndex === -1) {
				return state;
			}

			const matchingPolicyIndex = groups[matchingGroupIndex]!.policies.findIndex(
				(policy) => policy.id === action.payload.policyId,
			);

			if (matchingPolicyIndex === -1) {
				return state;
			}

			const newPolicyRules = {
				...groups[matchingGroupIndex]!.policies[matchingPolicyIndex]!.rules,
				rule: action.payload.rule,
			};

			const newGroup = {
				...groups[matchingGroupIndex]!,
				policies: [
					{
						...groups[matchingGroupIndex]!.policies[matchingPolicyIndex]!,
						rules: newPolicyRules,
					},
				],
			};

			groups[matchingGroupIndex] = newGroup;

			return { ...state, groups };
		}

		// case actions.REMOVE_RULE: {
		// 	const groups = [...state.groups];
		// 	const matchingGroupIndex = groups.findIndex((group) => group.id === action.payload.groupId);

		// 	if (matchingGroupIndex === -1) {
		// 		return state;
		// 	}

		// 	const matchingPolicyIndex = groups[matchingGroupIndex]!.policies.findIndex(
		// 		(policy) => policy.id === action.payload.policyId,
		// 	);

		// 	if (matchingPolicyIndex === -1) {
		// 		return state;
		// 	}

		// 	const newPolicyRules = {
		// 		...groups[matchingGroupIndex]!,
		// 		policies: [
		// 			{
		// 				...groups[matchingGroupIndex]!.policies[matchingPolicyIndex]!,
		// 				rules: [
		// 					{
		// 						...groups[matchingGroupIndex]!.policies[matchingPolicyIndex]!.rules.filter(
		// 							(rule: IRule) => {
		// 								return rule.id !== action.payload.ruleId;
		// 							},
		// 						),
		// 					},
		// 				],
		// 			},
		// 		],
		// 	};

		// 	const newGroup = {
		// 		...groups[matchingGroupIndex]!,
		// 		policies: [
		// 			{
		// 				...groups[matchingGroupIndex]!.policies[matchingPolicyIndex]!,
		// 				rules: newPolicyRules,
		// 			},
		// 		],
		// 	};

		// 	groups[matchingGroupIndex] = newGroup;

		// 	return { ...state, groups };
		// }

		default:
			return state;
	}
};

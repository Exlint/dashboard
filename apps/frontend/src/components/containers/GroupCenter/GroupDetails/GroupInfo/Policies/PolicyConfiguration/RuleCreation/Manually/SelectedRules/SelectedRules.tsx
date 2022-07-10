import React from 'react';
import axios, { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { IParams } from '@/interfaces/params';
import { IGroup } from '@/interfaces/group';
import { IRule } from '@/interfaces/rule';
import { IRemoveRule } from '@/interfaces/removeRule';

import * as fromApp from '@/store/app';
import * as groupsActions from '@/store/actions/groups';

import SelectedRulesView from './SelectedRules.view';

interface IPropsFromState {
	readonly groups: IGroup[];
}

interface IPropsFromDispatch {
	removeRule: (grouId: string, policyId: string, ruleId: string) => groupsActions.RemoveRule;
}

interface IProps extends IPropsFromState, IPropsFromDispatch {
	readonly selectedRule: IRule | null;
	readonly onEditSelectedRule: (rule: IRule) => void;
}

const SelectedRules: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { groupId, policyId, ruleId } = useParams<IParams>();

	const onRemoveRule = () => {
		axios
			.post<IRemoveRule>(`${process.env.REACT_APP_BACKEND_URL}/remove-rule`, {
				rule: props.selectedRule?.name,
			})
			.then(() => {
				props.removeRule(groupId!, policyId!, ruleId!);
			})
			.catch((err: AxiosError) => {
				alert(err.response?.data);
			});
	};

	const selectedGroup = props.groups.filter((group) => group.id === groupId)[0];
	const selectedPolicy = selectedGroup!.policies.filter((policy) => policy.id === policyId)[0];
	const selectedRules = selectedPolicy!.rules;

	return (
		<SelectedRulesView
			selectedRule={props.selectedRule}
			selectedRules={selectedRules}
			onRemoveRule={onRemoveRule}
			onEditSelectedRule={props.onEditSelectedRule}
		/>
	);
};

SelectedRules.displayName = 'SelectedRules';
SelectedRules.defaultProps = {};

const mapStateToProps = (state: fromApp.AppState) => {
	return {
		groups: state.groups.groups,
	};
};

const mapDispatchToProps = (dispatch: Dispatch<groupsActions.GroupsTypes>): IPropsFromDispatch => {
	return {
		removeRule: (groupId: string, policyId: string, ruleId: string): groupsActions.RemoveRule =>
			dispatch(groupsActions.removeRule(groupId, policyId, ruleId)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(SelectedRules));

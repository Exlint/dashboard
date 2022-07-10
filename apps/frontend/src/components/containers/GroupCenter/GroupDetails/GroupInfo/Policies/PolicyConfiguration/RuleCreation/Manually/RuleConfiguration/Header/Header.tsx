import React from 'react';
import axios, { AxiosError } from 'axios';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { useParams } from 'react-router-dom';

import { ruleAlertTypes } from '@/data/ruleAlertTypes';
import { IRule } from '@/interfaces/rule';
import { ICreateRule } from '@/interfaces/createRule';
import { IParams } from '@/interfaces/params';

import * as groupsActions from '@/store/actions/groups';

import HeaderView from './Header.view';

interface IPropsFromDispatch {
	addRule: (grouId: string, policyId: string, rule: IRule) => groupsActions.AddRule;
}

interface IProps extends IPropsFromDispatch {
	readonly selectedRule: IRule | null;
	readonly selectedRules: IRule[];
	readonly ruleCodeBasedConfigurationsInput: string;
	readonly selectedRuleAlertTypeIndex: number;
}

const Header: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { groupId, policyId } = useParams<IParams>();
	const ruleConfiguration = [ruleAlertTypes[props.selectedRuleAlertTypeIndex]];

	ruleConfiguration.push(props.ruleCodeBasedConfigurationsInput);

	const onAddRuleToList = () => {
		axios
			.post<ICreateRule>(`${process.env.REACT_APP_BACKEND_URL}/add-rule`, {
				rule: props.selectedRule?.name,
				ruleConfiguration: ruleConfiguration,
			})
			.then(() => {
				props.addRule(groupId!, policyId!, props.selectedRule!);
			})
			.catch((err: AxiosError) => {
				alert(err.response?.data);
			});
	};

	const onUpdateRule = () => {
		axios
			.post<ICreateRule>(`${process.env.REACT_APP_BACKEND_URL}/edit-rule`, {
				rule: props.selectedRule?.name,
				ruleConfiguration: ruleConfiguration,
			})
			.then(() => {
				props.addRule(groupId!, policyId!, props.selectedRule!);
			})
			.catch((err: AxiosError) => {
				alert(err.response?.data);
			});
	};

	return (
		<HeaderView
			selectedRule={props.selectedRule}
			selectedRules={props.selectedRules}
			onAddRuleToList={onAddRuleToList}
			onUpdateRule={onUpdateRule}
		/>
	);
};

Header.displayName = 'Header';
Header.defaultProps = {};

const mapDispatchToProps = (dispatch: Dispatch<groupsActions.GroupsTypes>): IPropsFromDispatch => {
	return {
		addRule: (groupId: string, policyId: string, rule: IRule): groupsActions.AddRule =>
			dispatch(groupsActions.addRule(groupId, policyId, rule)),
	};
};

export default connect(null, mapDispatchToProps)(React.memo(Header));

import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import uniqid from 'uniqid';

import { currentDate } from '@/utils/currentDate';

import { IGroup } from '@/interfaces/group';
import { IPolicy } from '@/interfaces/policy';

import * as groupsActions from '@/store/actions/groups';

import PolicyConfigurationButtonView from './PolicyConfigurationButton.view';

interface IPropsFromDispatch {
	addPolicy: (groupId: string, policy: IPolicy) => groupsActions.AddPolicy;
}

interface IProps extends IPropsFromDispatch {
	readonly isButtonDisabled: boolean;
	readonly selectedGroup: IGroup | null;
	readonly policyLabelInput: string | null;
}

const PolicyConfigurationButton: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const onCreateNewPolicy = () => {
		props.addPolicy(props.selectedGroup?.id || '', {
			id: uniqid(),
			label: props.policyLabelInput || '',
			createdAt: currentDate(),
			libraryName: '',
			rules: null,
		});
	};

	return (
		<PolicyConfigurationButtonView
			isButtonDisabled={props.isButtonDisabled}
			onCreateNewPolicy={onCreateNewPolicy}
		/>
	);
};

PolicyConfigurationButton.displayName = 'PolicyConfigurationButton';
PolicyConfigurationButton.defaultProps = {};

const mapDispatchToProps = (dispatch: Dispatch<groupsActions.GroupsTypes>): IPropsFromDispatch => {
	return {
		addPolicy: (groupId: string, policy: IPolicy): groupsActions.AddPolicy =>
			dispatch(groupsActions.addPolicy(groupId, policy)),
	};
};

export default connect(null, mapDispatchToProps)(React.memo(PolicyConfigurationButton));

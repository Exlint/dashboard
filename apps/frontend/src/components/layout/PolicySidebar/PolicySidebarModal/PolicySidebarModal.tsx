import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import type { PayloadAction } from '@reduxjs/toolkit';

import { authActions } from '@/store/reducers/auth';
import { backendApi } from '@/utils/http';

import UserSettingsModalView from './PolicySidebarModal.view';

interface IPropsFromDispatch {
	readonly setUnauthenticated: () => PayloadAction;
}

interface IProps extends IPropsFromDispatch {
	readonly policyLabel: string;
	readonly onCloseModal: () => void;
}

const PolicySidebarModal: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const navigate = useNavigate();

	const [isConfirmButtonDisabledState, setIsConfirmButtonDisabledState] = useState<boolean>(true);

	const onDeletePolicy = () => {
		backendApi.delete('/user/inline-policy/delete').then(() => {
			props.setUnauthenticated();

			navigate('/auth');
		});
	};

	const onDeletePolicyInputChangeHandler = (input: string) => {
		setIsConfirmButtonDisabledState(() => input !== props.policyLabel.toUpperCase());
	};

	return (
		<UserSettingsModalView
			isConfirmButtonDisabled={isConfirmButtonDisabledState}
			policyLabel={props.policyLabel}
			onDeletePolicy={onDeletePolicy}
			onCloseModal={props.onCloseModal}
			onDeletePolicyInputChangeHandler={onDeletePolicyInputChangeHandler}
		/>
	);
};

PolicySidebarModal.displayName = 'PolicySidebarModal';
PolicySidebarModal.defaultProps = {};

export default connect(null, {
	setUnauthenticated: authActions.setUnauthenticated,
})(React.memo(PolicySidebarModal));

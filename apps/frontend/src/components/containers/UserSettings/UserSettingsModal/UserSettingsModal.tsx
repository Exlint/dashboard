import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import type { PayloadAction } from '@reduxjs/toolkit';

import { authActions } from '@/store/reducers/auth';
import { backendApi } from '@/utils/http';

import UserSettingsModalView from './UserSettingsModal.view';

interface IPropsFromDispatch {
	readonly setUnauthenticated: () => PayloadAction;
}

interface IProps extends IPropsFromDispatch {
	readonly onBackdropClick: () => void;
}

const UserSettingsModal: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const navigate = useNavigate();

	const [isConfirmButtonDisabledState, setIsConfirmButtonDisabledState] = useState<boolean>(false);

	const onDeleteUser = () => {
		backendApi.delete('/user/auth/delete').then(() => {
			localStorage.clear();
			sessionStorage.clear();

			props.setUnauthenticated();

			navigate('/auth');
		});
	};

	const onDeleteUserChangeHandler = (input: string) => {
		setIsConfirmButtonDisabledState(() => input === 'DELETE-USER');
	};

	return (
		<UserSettingsModalView
			isConfirmButtonDisabled={isConfirmButtonDisabledState}
			onDeleteUser={onDeleteUser}
			onBackdropClick={props.onBackdropClick}
			onDeleteUserChangeHandler={onDeleteUserChangeHandler}
		/>
	);
};

UserSettingsModal.displayName = 'UserSettingsModal';
UserSettingsModal.defaultProps = {};

export default connect(null, {
	setUnauthenticated: authActions.setUnauthenticated,
})(React.memo(UserSettingsModal));

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AxiosResponse } from 'axios';

import { authActions } from '@/store/reducers/auth';
import { backendApi } from '@/utils/http';
import type { IDeleteUserResponseData } from '@/interfaces/responses';

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
		backendApi
			.delete<IDeleteUserResponseData>('/user/auth/delete')
			.then((response: AxiosResponse<IDeleteUserResponseData>) => {
				if (response.status === 200) {
					localStorage.clear();
					sessionStorage.clear();

					props.setUnauthenticated();

					navigate('/auth');
				}
			});
	};

	const onDeleteUserChangeHandler = (input: string) => {
		if (input === 'DELETE-USER') {
			setIsConfirmButtonDisabledState(() => true);
		} else {
			setIsConfirmButtonDisabledState(() => false);
		}
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

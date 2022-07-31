import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import type { PayloadAction } from '@reduxjs/toolkit';
import { useTranslation } from 'react-i18next';

import { authActions } from '@/store/reducers/auth';
import { backendApi } from '@/utils/http';

import UserSettingsModalView from './UserSettingsModal.view';

interface IPropsFromDispatch {
	readonly setUnauthenticated: () => PayloadAction;
}

interface IProps extends IPropsFromDispatch {
	readonly onCloseModal: () => void;
}

const UserSettingsModal: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const [isConfirmButtonDisabledState, setIsConfirmButtonDisabledState] = useState<boolean>(true);

	const onDeleteUser = () => {
		backendApi.delete('/user/auth/delete').then(() => {
			props.setUnauthenticated();

			navigate('/auth');
		});
	};

	const onDeleteUserInputChangeHandler = (input: string) => {
		setIsConfirmButtonDisabledState(() => input !== t('userSettings.userSettingsModal.actionPhraseText'));
	};

	return (
		<UserSettingsModalView
			isConfirmButtonDisabled={isConfirmButtonDisabledState}
			onDeleteUser={onDeleteUser}
			onCloseModal={props.onCloseModal}
			onDeleteUserInputChangeHandler={onDeleteUserInputChangeHandler}
		/>
	);
};

UserSettingsModal.displayName = 'UserSettingsModal';
UserSettingsModal.defaultProps = {};

export default connect(null, {
	setUnauthenticated: authActions.setUnauthenticated,
})(React.memo(UserSettingsModal));

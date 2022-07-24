import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import type { PayloadAction } from '@reduxjs/toolkit';

import { authActions } from '@/store/reducers/auth';

import UserSettingsView from './UserSettings.view';

interface IPropsFromDispatch {
	readonly logout?: () => PayloadAction;
}

interface IProps extends IPropsFromDispatch {}

const UserSettings: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const navigate = useNavigate();

	const [isModelOnViewState, setIsModelOnViewState] = useState<boolean>(false);

	const onLogout = () => {
		props.logout!();

		navigate('/auth');
	};

	const onBackdropClick = () => {
		setIsModelOnViewState((prevState) => !prevState);
	};

	return (
		<UserSettingsView
			isModelOnView={isModelOnViewState}
			onLogout={onLogout}
			onBackdropClick={onBackdropClick}
		/>
	);
};

UserSettings.displayName = 'UserSettings';
UserSettings.defaultProps = {};

export default connect(null, {
	setUnauthenticated: authActions.logout,
})(React.memo(UserSettings));

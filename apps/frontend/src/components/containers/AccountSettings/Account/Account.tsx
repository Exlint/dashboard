import React from 'react';
import { connect } from 'react-redux';
import type { PayloadAction } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

import { authActions } from '@/store/reducers/auth';
import { uiActions } from '@/store/reducers/ui';
import BackendService from '@/services/backend';

import AccountView from './Account.view';

interface IPropsFromDispatch {
	readonly setUnauthenticated: () => PayloadAction;
	readonly closeNotification: () => PayloadAction;
}

interface IProps extends IPropsFromDispatch {}

const Account: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const navigate = useNavigate();

	const onSignOutClick = () => {
		props.closeNotification();
		props.setUnauthenticated();

		navigate('/auth');
	};

	const onModalConfirmClick = async () => {
		await BackendService.delete('/user/auth');

		props.closeNotification();
		props.setUnauthenticated();

		navigate('/auth');
	};

	return <AccountView onSignOutClick={onSignOutClick} onModalConfirmClick={onModalConfirmClick} />;
};

Account.displayName = 'Account';
Account.defaultProps = {};

export default connect(null, {
	setUnauthenticated: authActions.setUnauthenticated,
	closeNotification: uiActions.closeNotification,
})(React.memo(Account));

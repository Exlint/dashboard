import React from 'react';
import { connect } from 'react-redux';
import type { PayloadAction } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

import { authActions } from '@/store/reducers/auth';
import { backendApi } from '@/utils/http';

import AccountView from './Account.view';

interface IPropsFromDispatch {
	readonly setUnauthenticated: () => PayloadAction;
}

interface IProps extends IPropsFromDispatch {}

const Account: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const navigate = useNavigate();

	const onSignOutClick = () => {
		props.setUnauthenticated();

		navigate('/auth');
	};

	const onModalConfirmClick = () => {
		backendApi.delete('/user/auth').then(() => {
			props.setUnauthenticated();

			navigate('/auth');
		});
	};

	return <AccountView onSignOutClick={onSignOutClick} onModalConfirmClick={onModalConfirmClick} />;
};

Account.displayName = 'Account';
Account.defaultProps = {};

export default connect(null, {
	setUnauthenticated: authActions.setUnauthenticated,
})(React.memo(Account));

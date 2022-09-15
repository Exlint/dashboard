import React, { useState } from 'react';
import { connect } from 'react-redux';
import type { PayloadAction } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

import { authActions } from '@/store/reducers/auth';

import AccountView from './Account.view';

interface IPropsFromDispatch {
	readonly setUnauthenticated: () => PayloadAction;
}

interface IProps extends IPropsFromDispatch {}

const Account: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const navigate = useNavigate();

	const [isDeleteAccountModalOnViewState, setIsDeleteAccountModalOnViewState] = useState<boolean>(false);

	const onSignOutClick = () => {
		props.setUnauthenticated();

		navigate('/auth');
	};

	const onOpenDeleteAccountModal = () => setIsDeleteAccountModalOnViewState(() => true);
	const onCloseDeleteAccountModal = () => setIsDeleteAccountModalOnViewState(() => false);

	return (
		<AccountView
			isDeleteAccountModalOnView={isDeleteAccountModalOnViewState}
			onSignOutClick={onSignOutClick}
			onOpenDeleteAccountModal={onOpenDeleteAccountModal}
			onCloseDeleteAccountModal={onCloseDeleteAccountModal}
		/>
	);
};

Account.displayName = 'Account';
Account.defaultProps = {};

export default connect(null, {
	setUnauthenticated: authActions.setUnauthenticated,
})(React.memo(Account));

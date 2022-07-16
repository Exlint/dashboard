import React from 'react';
import type { PayloadAction } from '@reduxjs/toolkit';
import { connect } from 'react-redux';

import { authActions } from '@/store/reducers/auth';

import HeaderView from './Header.view';

interface IPropsFromDispatch {
	logout: () => PayloadAction;
}

interface IProps extends IPropsFromDispatch {}

const Header: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const onExitButton = () => {
		props.logout();
	};

	return <HeaderView onExitButton={onExitButton} />;
};

Header.displayName = 'Header';
Header.defaultProps = {};

export default connect(null, { logout: authActions.logout })(React.memo(Header));

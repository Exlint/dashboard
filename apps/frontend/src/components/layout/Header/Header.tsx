import React from 'react';
import { connect } from 'react-redux';
import { type PayloadAction } from '@reduxjs/toolkit';

import type { AppDispatch } from '@/store/app';
import { authActions } from '@/store/reducers/auth';

import HeaderView from './Header.view';

interface IPropsFromDispatch {
	logout: () => PayloadAction;
}

interface IProps extends IPropsFromDispatch {}

const Header: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const onExitButton = () => props.logout();

	return <HeaderView onExitButton={onExitButton} />;
};

Header.displayName = 'Header';
Header.defaultProps = {};

const mapDispatchToProps = (dispatch: AppDispatch): IPropsFromDispatch => {
	return {
		logout: (): PayloadAction => dispatch(authActions.logout()),
	};
};

export default connect(null, mapDispatchToProps)(React.memo(Header));

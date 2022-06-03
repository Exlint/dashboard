import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import * as userActions from '../../../store/actions/user';
import HeaderView from './Header.view';

interface IPropsFromDispatch {
	unsetUser: () => userActions.UnsetUser;
}

interface IProps extends IPropsFromDispatch {}

const Header: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const onExitButton = () => {
		props.unsetUser();
	};

	return <HeaderView onExitButton={onExitButton} />;
};

Header.displayName = 'Header';
Header.defaultProps = {};

const mapDispatchToProps = (dispatch: Dispatch<userActions.UserTypes>): IPropsFromDispatch => {
	return {
		unsetUser: (): userActions.UnsetUser => dispatch(userActions.unsetUser()),
	};
};

export default connect(null, mapDispatchToProps)(Header);

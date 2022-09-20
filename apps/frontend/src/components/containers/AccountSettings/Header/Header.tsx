import React from 'react';
import { connect } from 'react-redux';

import type { AppState } from '@/store/app';

import HeaderView from './Header.view';

interface IPropsFromState {
	readonly name: string;
	readonly clientId: string;
	readonly createdAt: number;
}

interface IProps extends IPropsFromState {}

const Header: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const creationDateFormatted = new Intl.DateTimeFormat('en-US').format(props.createdAt);

	return (
		<HeaderView name={props.name} clientId={props.clientId} userCreationDate={creationDateFormatted} />
	);
};

Header.displayName = 'Header';
Header.defaultProps = {};

const mapStateToProps = (state: AppState) => {
	return {
		name: state.auth.name!,
		clientId: state.auth.id!,
		createdAt: state.auth.createdAt!,
	};
};

export default connect(mapStateToProps)(React.memo(Header));

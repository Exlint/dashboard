import React from 'react';
import { connect } from 'react-redux';

import * as fromApp from './store/app';

import AppView from './App.view';

interface PropsFromState {
	isAuthenticated: boolean;
}

interface IProps extends PropsFromState {}

const App: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <AppView isAuthenticated={props.isAuthenticated} />;
};

App.displayName = 'App';
App.defaultProps = {};

const mapStateToProps = (state: fromApp.AppState) => {
	return {
		isAuthenticated: !!state.user,
	};
};

export default connect(mapStateToProps)(React.memo(App));

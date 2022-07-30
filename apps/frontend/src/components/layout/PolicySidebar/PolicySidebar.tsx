import React from 'react';
import { connect } from 'react-redux';

import type { AppState } from '@/store/app';

import PolicySidebarView from './PolicySidebar.view';

interface IPropsFromState {
	readonly name: string;
}

interface IProps extends IPropsFromState {}

const PolicySidebar: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <PolicySidebarView name={props.name} />;
};

PolicySidebar.displayName = 'PolicySidebar';
PolicySidebar.defaultProps = {};

const mapStateToProps = (state: AppState) => {
	return {
		name: state.auth.name!,
	};
};

export default connect(mapStateToProps)(React.memo(PolicySidebar));

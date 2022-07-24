import React from 'react';
import { connect } from 'react-redux';

import type { AppState } from '@/store/app';

import SettingsSidebarView from './SettingsSidebar.view';

interface IPropsFromState {
	readonly name: string;
}

interface IProps extends IPropsFromState {}

const SettingsSidebar: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <SettingsSidebarView name={props.name} />;
};

SettingsSidebar.displayName = 'SettingsSidebar';
SettingsSidebar.defaultProps = {};

const mapStateToProps = (state: AppState) => {
	return {
		name: state.auth.name!,
	};
};

export default connect(mapStateToProps)(React.memo(SettingsSidebar));

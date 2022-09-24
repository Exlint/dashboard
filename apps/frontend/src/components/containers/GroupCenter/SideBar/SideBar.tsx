import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { AppState } from '@/store/app';
import type {
	ISetSelectedSideBarGroupPayload,
	ISetSideBarGroupsPayload,
	ISideBarGroup,
} from '@/store/interfaces/groups';
import { groupsActions } from '@/store/reducers/groups';
import { backendApi } from '@/utils/http';

import type { IGetAllGroupsResponse } from '../interfaces/group';

import SideBarView from './SideBar.view';

interface IPropsFromState {
	readonly sideBarGroups: ISideBarGroup[];
}

interface IPropsFromDispatch {
	readonly setSideBarGroups: (groups: ISetSideBarGroupsPayload) => PayloadAction<ISetSideBarGroupsPayload>;
	readonly setSelectedSideBarGroup: (
		selectedDetails: ISetSelectedSideBarGroupPayload,
	) => PayloadAction<ISetSelectedSideBarGroupPayload>;
	readonly unsetSelectedSideBarGroup: () => PayloadAction;
}

interface IProps extends IPropsFromState, IPropsFromDispatch {}

const SideBar: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [searchInputState, setSearchInputState] = useState<string | null>(null);

	const filteredGroups = useMemo(() => {
		if (!searchInputState) {
			return props.sideBarGroups;
		}

		return props.sideBarGroups.filter((group) =>
			group.label.toLowerCase().includes(searchInputState.toLowerCase()),
		);
	}, [props.sideBarGroups, searchInputState]);

	const navigate = useNavigate();
	const params = useParams<{ readonly '*': string; readonly 'groupId': string }>();
	const isNewGroupButtonDisabled = params['*'] === 'new';
	const { pathname } = useLocation();

	useEffect(() => {
		if (pathname !== '/group-center/new' && !params.groupId) {
			const firstGroupId = props.sideBarGroups[0]?.id;

			if (firstGroupId) {
				navigate(`/group-center/${firstGroupId}/policies`);
			}
		}
	}, [params.groupId, pathname, props.sideBarGroups]);

	useEffect(() => {
		backendApi.get<IGetAllGroupsResponse>('/user/groups').then((response) => {
			const groups = response.data.groups;

			props.setSideBarGroups({ sideBarGroups: groups });

			const groupId = groups[0]?.id;
			const groupLabel = groups[0]?.label;

			if (pathname !== '/group-center/new' && !params.groupId && groupId && groupLabel) {
				navigate(`/group-center/${groupId}/policies`);
			}
		});
	}, [backendApi]);

	const onSearchInputChange = (value: string) => setSearchInputState(() => value);

	const onNewButtonClick = () => {
		props.unsetSelectedSideBarGroup();

		navigate('/group-center/new');
	};

	return (
		<SideBarView
			groups={filteredGroups}
			searchInput={searchInputState}
			isNewGroupButtonDisabled={isNewGroupButtonDisabled}
			onSearchInputChange={onSearchInputChange}
			onNewButtonClick={onNewButtonClick}
		/>
	);
};

SideBar.displayName = 'SideBar';
SideBar.defaultProps = {};

const mapStateToProps = (state: AppState) => {
	return {
		sideBarGroups: state.groups.sideBarGroups,
	};
};

export default connect(mapStateToProps, {
	setSideBarGroups: groupsActions.setSideBarGroups,
	setSelectedSideBarGroup: groupsActions.setSelectedSideBarGroup,
	unsetSelectedSideBarGroup: groupsActions.unsetSelectedSideBarGroup,
})(React.memo(SideBar));

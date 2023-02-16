import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IGetAllCompliancesResponseData } from '@exlint.io/common';

import type { AppState } from '@/store/app';
import type {
	ISetSelectedSideBarCompliancePayload,
	ISetSideBarCompliancesPayload,
	ISideBarCompliance,
} from '@/store/interfaces/compliances';
import { compliancesActions } from '@/store/reducers/compliances';
import { backendApi } from '@/utils/http';

import SideBarView from './SideBar.view';

interface IPropsFromState {
	readonly sideBarCompliances: ISideBarCompliance[];
}

interface IPropsFromDispatch {
	readonly setSideBarCompliances: (
		compliances: ISetSideBarCompliancesPayload,
	) => PayloadAction<ISetSideBarCompliancesPayload>;
	readonly setSelectedSideBarCompliance: (
		selectedDetails: ISetSelectedSideBarCompliancePayload,
	) => PayloadAction<ISetSelectedSideBarCompliancePayload>;
	readonly unsetSelectedSideBarCompliance: () => PayloadAction;
}

interface IProps extends IPropsFromState, IPropsFromDispatch {}

const SideBar: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [searchInputState, setSearchInputState] = useState<string | null>(null);

	const filteredCompliances = useMemo(() => {
		if (!searchInputState) {
			return props.sideBarCompliances;
		}

		return props.sideBarCompliances.filter((compliance) =>
			compliance.label.toLowerCase().includes(searchInputState.toLowerCase()),
		);
	}, [props.sideBarCompliances, searchInputState]);

	const navigate = useNavigate();
	const params = useParams<{ readonly '*': string; readonly 'complianceId': string }>();
	const isNewComplianceButtonDisabled = params['*'] === 'new';
	const { pathname } = useLocation();

	useEffect(() => {
		if (pathname !== '/compliance-center/new' && !params.complianceId) {
			const firstComplianceId = props.sideBarCompliances[0]?.id;

			if (firstComplianceId) {
				navigate(`/compliance-center/${firstComplianceId}/policies`);
			}
		}
	}, [params.complianceId, pathname, props.sideBarCompliances]);

	useEffect(() => {
		backendApi.get<IGetAllCompliancesResponseData>('/user/compliances').then((response) => {
			const compliances = response.data.compliances;

			props.setSideBarCompliances({ sideBarCompliances: compliances });

			const complianceId = compliances[0]?.id;
			const complianceLabel = compliances[0]?.label;

			if (
				pathname !== '/compliance-center/new' &&
				!params.complianceId &&
				complianceId &&
				complianceLabel
			) {
				navigate(`/compliance-center/${complianceId}/policies`);
			}
		});
	}, [backendApi]);

	const onSearchInputChange = (value: string) => setSearchInputState(() => value);

	const onNewButtonClick = () => {
		props.unsetSelectedSideBarCompliance();

		navigate('/compliance-center/new');
	};

	return (
		<SideBarView
			compliances={filteredCompliances}
			searchInput={searchInputState}
			isNewComplianceButtonDisabled={isNewComplianceButtonDisabled}
			onSearchInputChange={onSearchInputChange}
			onNewButtonClick={onNewButtonClick}
		/>
	);
};

SideBar.displayName = 'SideBar';
SideBar.defaultProps = {};

const mapStateToProps = (state: AppState) => {
	return {
		sideBarCompliances: state.compliances.sideBarCompliances,
	};
};

export default connect(mapStateToProps, {
	setSideBarCompliances: compliancesActions.setSideBarCompliances,
	setSelectedSideBarCompliance: compliancesActions.setSelectedSideBarCompliance,
	unsetSelectedSideBarCompliance: compliancesActions.unsetSelectedSideBarCompliance,
})(React.memo(SideBar));

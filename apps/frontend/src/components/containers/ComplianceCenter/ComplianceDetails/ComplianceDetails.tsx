import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IGetComplianceResponseData } from '@exlint.io/common';

import { backendApi } from '@/utils/http';
import type {
	IEditSideBarComplianceLabelPayload,
	ISelectedSideBarCompliance,
	ISetSelectedSideBarCompliancePayload,
} from '@/store/interfaces/compliances';
import { compliancesActions } from '@/store/reducers/compliances';
import type { AppState } from '@/store/app';

import ComplianceDetailsView from './ComplianceDetails.view';

interface IPropsFromState {
	readonly selectedSideBarCompliance: ISelectedSideBarCompliance;
}

interface IPropsFromDispatch {
	readonly editSideBarCompliance: (
		editDetails: IEditSideBarComplianceLabelPayload,
	) => PayloadAction<IEditSideBarComplianceLabelPayload>;
	readonly setSelectedSideBarCompliance: (
		selectedDetails: ISetSelectedSideBarCompliancePayload,
	) => PayloadAction<ISetSelectedSideBarCompliancePayload>;
}

interface IProps extends IPropsFromState, IPropsFromDispatch {}

const ComplianceDetails: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const navigate = useNavigate();
	const params = useParams<Record<string & 'complianceId', string>>();

	useEffect(() => {
		backendApi
			.get<IGetComplianceResponseData>(`/user/compliances/${params.complianceId!}`)
			.then((response) => {
				props.setSelectedSideBarCompliance({
					selectedSideBarCompliance: {
						...response.data,
						id: params.complianceId!,
					},
				});
			})
			.catch(() => navigate('/compliance-center'));
	}, [params, backendApi]);

	return <ComplianceDetailsView selectedCompliance={props.selectedSideBarCompliance} />;
};

ComplianceDetails.displayName = 'ComplianceDetails';
ComplianceDetails.defaultProps = {};

const mapStateToProps = (state: AppState) => {
	return {
		selectedSideBarCompliance: state.compliances.selectedSideBarCompliance!,
	};
};

export default connect(mapStateToProps, {
	editSideBarCompliance: compliancesActions.editSideBarCompliance,
	setSelectedSideBarCompliance: compliancesActions.setSelectedSideBarCompliance,
})(React.memo(ComplianceDetails));

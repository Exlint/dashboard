import React from 'react';
import { connect } from 'react-redux';
import type { PayloadAction } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

import { compliancesActions } from '@/store/reducers/compliances';
import type { IDeleteSideBarCompliancePayload } from '@/store/interfaces/compliances';
import { backendApi } from '@/utils/http';

import DeleteComplianceView from './DeleteCompliance.view';

interface IPropsFromDispatch {
	readonly deleteSideBarCompliance: (
		deletePayload: IDeleteSideBarCompliancePayload,
	) => PayloadAction<IDeleteSideBarCompliancePayload>;
}

interface IProps extends IPropsFromDispatch {
	readonly complianceId: string;
	readonly complianceLabel: string;
}

const DeleteCompliance: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const navigate = useNavigate();

	const onDeleteComplianceConfirmClick = () => {
		backendApi.delete(`/user/compliances/${props.complianceId}`).then(() => {
			props.deleteSideBarCompliance({ id: props.complianceId });

			navigate('/compliance-center');
		});
	};

	return (
		<DeleteComplianceView
			complianceLabel={props.complianceLabel}
			onDeleteComplianceConfirmClick={onDeleteComplianceConfirmClick}
		/>
	);
};

DeleteCompliance.displayName = 'DeleteCompliance';
DeleteCompliance.defaultProps = {};

export default connect(null, {
	deleteSideBarCompliance: compliancesActions.deleteSideBarCompliance,
})(React.memo(DeleteCompliance));

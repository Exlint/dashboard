import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IGetAllCompliancesResponseData } from '@exlint.io/common';

import type { IUiShowNotificationPayload } from '@/store/interfaces/ui';
import { uiActions } from '@/store/reducers/ui';
import type { ArrayElement } from '@/types/array-element';

import ComplianceItemView from './ComplianceItem.view';

interface IPropsFromDispatch {
	readonly showNotification: (
		showNotificationPayload: IUiShowNotificationPayload,
	) => PayloadAction<IUiShowNotificationPayload>;
}

interface IProps extends IPropsFromDispatch {
	readonly compliance: ArrayElement<IGetAllCompliancesResponseData['compliances']>;
}

const ComplianceItem: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();
	const params = useParams<{ readonly complianceId: string }>();

	const onCopyComplianceId = () => {
		navigator.clipboard.writeText(props.compliance.id);

		props.showNotification({
			notificationType: 'info',
			notificationTitle: t('copyNotification.title'),
			notificationMessage: t('copyNotification.message'),
		});
	};

	return (
		<ComplianceItemView
			isSelected={params.complianceId === props.compliance.id}
			compliance={props.compliance}
			onCopyComplianceId={onCopyComplianceId}
		/>
	);
};

ComplianceItem.displayName = 'ComplianceItem';
ComplianceItem.defaultProps = {};

export default connect(null, {
	showNotification: uiActions.showNotification,
})(React.memo(ComplianceItem));

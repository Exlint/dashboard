import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { IUiShowNotificationPayload } from '@/store/interfaces/ui';
import { uiActions } from '@/store/reducers/ui';
import type { ISideBarCompliance } from '@/store/interfaces/compliances';
import type { AppState } from '@/store/app';

import ComplianceItemView from './ComplianceItem.view';

interface IPropsFromState {
	readonly selectedComplianceId?: string;
}

interface IPropsFromDispatch {
	readonly showNotification: (
		showNotificationPayload: IUiShowNotificationPayload,
	) => PayloadAction<IUiShowNotificationPayload>;
}

interface IProps extends IPropsFromState, IPropsFromDispatch {
	readonly compliance: ISideBarCompliance;
}

const ComplianceItem: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

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
			compliance={props.compliance}
			isSelected={props.selectedComplianceId === props.compliance.id}
			onCopyComplianceId={onCopyComplianceId}
		/>
	);
};

ComplianceItem.displayName = 'ComplianceItem';
ComplianceItem.defaultProps = {};

const mapStateToProps = (state: AppState) => {
	return {
		selectedComplianceId: state.compliances.selectedSideBarCompliance?.id,
	};
};

export default connect(mapStateToProps, {
	showNotification: uiActions.showNotification,
})(React.memo(ComplianceItem));

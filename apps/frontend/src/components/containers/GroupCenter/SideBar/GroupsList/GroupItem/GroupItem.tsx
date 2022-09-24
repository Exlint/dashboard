import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { IUiShowNotificationPayload } from '@/store/interfaces/ui';
import { uiActions } from '@/store/reducers/ui';
import type { ISideBarGroup } from '@/store/interfaces/groups';
import type { AppState } from '@/store/app';

import GroupItemView from './GroupItem.view';

interface IPropsFromState {
	readonly selectedGroupId?: string;
}

interface IPropsFromDispatch {
	readonly showNotification: (
		showNotificationPayload: IUiShowNotificationPayload,
	) => PayloadAction<IUiShowNotificationPayload>;
}

interface IProps extends IPropsFromState, IPropsFromDispatch {
	readonly group: ISideBarGroup;
}

const GroupItem: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	const onCopyGroupId = () => {
		navigator.clipboard.writeText(props.group.id);

		props.showNotification({
			notificationType: 'info',
			notificationTitle: t('copyNotification.title'),
			notificationMessage: t('copyNotification.message'),
		});
	};

	return (
		<GroupItemView
			group={props.group}
			isSelected={props.selectedGroupId === props.group.id}
			onCopyGroupId={onCopyGroupId}
		/>
	);
};

GroupItem.displayName = 'GroupItem';
GroupItem.defaultProps = {};

const mapStateToProps = (state: AppState) => {
	return {
		selectedGroupId: state.groups.selectedSideBarGroup?.id,
	};
};

export default connect(mapStateToProps, {
	showNotification: uiActions.showNotification,
})(React.memo(GroupItem));

import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import type { PayloadAction } from '@reduxjs/toolkit';
import { useTranslation } from 'react-i18next';

import type { IUiShowNotificationPayload } from '@/store/interfaces/ui';
import { uiActions } from '@/store/reducers/ui';

import type { ISideBarGroup } from '../../interfaces/group';

import GroupsListView from './GroupsList.view';

interface IPropsFromDispatch {
	readonly showNotification: (
		showNotificationPayload: IUiShowNotificationPayload,
	) => PayloadAction<IUiShowNotificationPayload>;
}

interface IProps extends IPropsFromDispatch {
	readonly groups: ISideBarGroup[];
}

const GroupsList: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const params = useParams<{ readonly '*': string }>();
	const { t } = useTranslation();

	const onCopyGroupId = (groupId: string) => {
		navigator.clipboard.writeText(groupId);

		props.showNotification({
			notificationType: 'info',
			notificationTitle: t('groupCenter.sideBar.copyNotification.title'),
			notificationMessage: t('groupCenter.sideBar.copyNotification.message'),
		});
	};

	return (
		<GroupsListView groups={props.groups} selectedGroupId={params['*']} onCopyGroupId={onCopyGroupId} />
	);
};

GroupsList.displayName = 'GroupsList';
GroupsList.defaultProps = {};

export default connect(null, {
	showNotification: uiActions.showNotification,
})(React.memo(GroupsList));

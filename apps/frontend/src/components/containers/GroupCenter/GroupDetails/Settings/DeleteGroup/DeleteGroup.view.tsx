import React from 'react';
import { useTranslation } from 'react-i18next';

import EDDeleteButton from '@/ui/EDDeleteButton';

import classes from './DeleteGroup.module.scss';

interface IProps {
	readonly groupLabel: string;
	readonly onDeleteGroupConfirmClick: VoidFunction;
}

const DeleteGroupView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<>
			<h3 className={classes['title']}>{t('groupCenter.settings.deleteTitle')}</h3>

			<span className={classes['instructionText']}>
				{t('groupCenter.settings.deleteInstruction', { label: props.groupLabel })}
			</span>
			<EDDeleteButton
				className={classes['deleteButton']}
				modalConfirmationKeyword={props.groupLabel}
				modalTitle={t('groupCenter.settings.deleteModal.header', { label: props.groupLabel })}
				modalSubTitle={t('groupCenter.settings.deleteModal.subHeader')}
				onModalConfirmClick={props.onDeleteGroupConfirmClick}
			>
				{t('groupCenter.settings.deleteButton', { label: props.groupLabel })}
			</EDDeleteButton>
		</>
	);
};

DeleteGroupView.displayName = 'DeleteGroupView';
DeleteGroupView.defaultProps = {};

export default React.memo(DeleteGroupView);

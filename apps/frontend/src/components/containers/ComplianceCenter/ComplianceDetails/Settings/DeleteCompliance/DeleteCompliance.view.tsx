import React from 'react';
import { useTranslation } from 'react-i18next';

import EDDeleteButton from '@/ui/EDDeleteButton';

import classes from './DeleteCompliance.module.scss';

interface IProps {
	readonly complianceLabel: string;
	readonly onDeleteComplianceConfirmClick: VoidFunction;
}

const DeleteComplianceView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<>
			<h3 className={classes['title']}>{t('complianceCenter.settings.deleteTitle')}</h3>

			<span className={classes['instructionText']}>
				{t('complianceCenter.settings.deleteInstruction', { label: props.complianceLabel })}
			</span>
			<EDDeleteButton
				className={classes['deleteButton']}
				modalConfirmationKeyword={props.complianceLabel}
				modalTitle={t('complianceCenter.settings.deleteModal.header', {
					label: props.complianceLabel,
				})}
				modalSubTitle={t('complianceCenter.settings.deleteModal.subHeader')}
				onModalConfirmClick={props.onDeleteComplianceConfirmClick}
			>
				{t('complianceCenter.settings.deleteButton', { label: props.complianceLabel })}
			</EDDeleteButton>
		</>
	);
};

DeleteComplianceView.displayName = 'DeleteComplianceView';
DeleteComplianceView.defaultProps = {};

export default React.memo(DeleteComplianceView);

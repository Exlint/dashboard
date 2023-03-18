import React from 'react';
import { useTranslation } from 'react-i18next';

import EDDeleteButton from '@/ui/EDDeleteButton';

import classes from './DeletePolicy.module.scss';

interface IProps {
	readonly policyLabel: string;
	readonly onDeletePolicyConfirmClick: () => Promise<void>;
}

const DeletePolicyView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<>
			<h3 className={classes['title']}>{t('policy.settings.deleteTitle')}</h3>

			<span className={classes['instructionText']}>
				{t('policy.settings.deleteInstruction', { label: props.policyLabel })}
			</span>
			<EDDeleteButton
				className={classes['deleteButton']}
				modalConfirmationKeyword={props.policyLabel}
				modalTitle={t('policy.settings.deleteModal.header', { label: props.policyLabel })}
				modalSubTitle={t('policy.settings.deleteModal.subHeader')}
				onModalConfirmClick={props.onDeletePolicyConfirmClick}
			>
				{t('policy.settings.deleteButton', { label: props.policyLabel })}
			</EDDeleteButton>
		</>
	);
};

DeletePolicyView.displayName = 'DeletePolicyView';
DeletePolicyView.defaultProps = {};

export default React.memo(DeletePolicyView);

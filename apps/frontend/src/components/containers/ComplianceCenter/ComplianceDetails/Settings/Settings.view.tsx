import React, { type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';

import EditComplianceLabel from './EditComplianceLabel';
import DeleteCompliance from './DeleteCompliance';

import classes from './Settings.module.scss';

interface IProps {
	readonly complianceId: string;
	readonly complianceLabel: string;
	readonly newComplianceLabelInput: string | null;
	readonly onNewComplianceLabelInputChange: (value: string) => void;
	readonly onSaveChangesButtonClick: (e: FormEvent<HTMLFormElement>) => void;
}

const SettingsView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<div className={classes['container']}>
			<div className={classes['sideTab']}>
				<div className={classes['sideTab__border']} />
				<span className={classes['sideTab__text']}>{t('complianceCenter.settings.tab')}</span>
			</div>

			<form className={classes['actionsForm']} onSubmit={props.onSaveChangesButtonClick}>
				<EditComplianceLabel
					complianceLabel={props.complianceLabel}
					newComplianceLabelInput={props.newComplianceLabelInput}
					onNewComplianceLabelInputChange={props.onNewComplianceLabelInputChange}
				/>

				<DeleteCompliance complianceId={props.complianceId} complianceLabel={props.complianceLabel} />
			</form>
		</div>
	);
};

SettingsView.displayName = 'SettingsView';
SettingsView.defaultProps = {};

export default React.memo(SettingsView);

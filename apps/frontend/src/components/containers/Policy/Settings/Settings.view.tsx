import React, { type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';

import EditPolicyLabel from './EditPolicyLabel';
import DeletePolicy from './DeletePolicy';

import classes from './Settings.module.scss';

interface IProps {
	readonly policyLabel: string | null;
	readonly newPolicyLabelInput: string | null;
	readonly onNewPolicyLabelInputChange: (value: string) => void;
	readonly onSaveChangesButtonClick: (e: FormEvent<HTMLFormElement>) => void;
}

const SettingsView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return props.policyLabel !== null ? (
		<div className={classes['container']}>
			<div className={classes['sideTab']}>
				<div className={classes['sideTab__border']} />
				<span className={classes['sideTab__text']}>{t('policy.settings.tab')}</span>
			</div>

			<form className={classes['actionsForm']} onSubmit={props.onSaveChangesButtonClick}>
				<EditPolicyLabel
					policyLabel={props.policyLabel}
					newPolicyLabelInput={props.newPolicyLabelInput}
					onNewPolicyLabelInputChange={props.onNewPolicyLabelInputChange}
				/>

				<DeletePolicy policyLabel={props.policyLabel} />
			</form>
		</div>
	) : null;
};

SettingsView.displayName = 'SettingsView';
SettingsView.defaultProps = {};

export default React.memo(SettingsView);

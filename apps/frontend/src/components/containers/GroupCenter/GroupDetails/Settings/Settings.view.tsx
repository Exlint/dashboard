import React, { type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';

import EditGroupLabel from './EditGroupLabel';
import DeleteGroup from './DeleteGroup';

import classes from './Settings.module.scss';

interface IProps {
	readonly groupId: string;
	readonly groupLabel: string;
	readonly newGroupLabelInput: string | null;
	readonly onNewGroupLabelInputChange: (value: string) => void;
	readonly onSaveChangesButtonClick: (e: FormEvent<HTMLFormElement>) => void;
}

const SettingsView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<div className={classes['container']}>
			<div className={classes['sideTab']}>
				<div className={classes['sideTab__border']} />
				<span className={classes['sideTab__text']}>{t('groupCenter.settings.tab')}</span>
			</div>

			<form className={classes['actionsForm']} onSubmit={props.onSaveChangesButtonClick}>
				<EditGroupLabel
					groupLabel={props.groupLabel}
					newGroupLabelInput={props.newGroupLabelInput}
					onNewGroupLabelInputChange={props.onNewGroupLabelInputChange}
				/>

				<DeleteGroup groupId={props.groupId} groupLabel={props.groupLabel} />
			</form>
		</div>
	);
};

SettingsView.displayName = 'SettingsView';
SettingsView.defaultProps = {};

export default React.memo(SettingsView);

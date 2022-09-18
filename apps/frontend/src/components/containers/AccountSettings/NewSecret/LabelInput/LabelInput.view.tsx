import React from 'react';
import { useTranslation } from 'react-i18next';

import EDInputFieldAvailability from '@/ui/EDInputFieldAvailability';

import classes from './LabelInput.module.scss';

interface IProps {
	readonly secretLabelInput: string | null;
	readonly isSecretLabelAvailable: boolean | null;
	readonly onSecretLabelInputChange: (value: string) => void;
}

const LabelInputView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<>
			<label className={classes['label']} htmlFor="generateSecretNameInput">
				{t('accountSettings.newSecret.nameInputLabel')}
			</label>
			<EDInputFieldAvailability
				id="generateSecretNameInput"
				value={props.secretLabelInput}
				maxLength={30}
				isAvailable={props.isSecretLabelAvailable}
				onChange={props.onSecretLabelInputChange}
			/>
			<small className={classes['hint']}>{t('accountSettings.newSecret.secretUsageHint')}</small>
		</>
	);
};

LabelInputView.displayName = 'LabelInputView';
LabelInputView.defaultProps = {};

export default React.memo(LabelInputView);

import React from 'react';
import { useTranslation } from 'react-i18next';

import { concatClasses } from '@/utils/component';
import EDSvg from '@/ui/EDSvg';

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
			<div className={classes['inputContainer']}>
				<input
					className={classes['inputContainer__input']}
					id="generateSecretNameInput"
					type="text"
					value={props.secretLabelInput ?? ''}
					maxLength={30}
					onChange={({ currentTarget: { value } }) => props.onSecretLabelInputChange(value)}
				/>
				{props.isSecretLabelAvailable !== null && (
					<div className={classes['tooltip']}>
						<EDSvg
							className={concatClasses(
								classes,
								'tooltip__icon',
								props.isSecretLabelAvailable
									? 'tooltip__icon--available'
									: 'tooltip__icon--unavailable',
							)}
							name={props.isSecretLabelAvailable ? 'vStroke' : 'xFill'}
						/>
						<span className={classes['tooltip__text']}>
							{props.isSecretLabelAvailable
								? t('accountSettings.newSecret.labelIsAvailable')
								: t('accountSettings.newSecret.labelIsUnavailable')}
						</span>
					</div>
				)}
			</div>
			<small className={classes['hint']}>{t('accountSettings.newSecret.secretUsageHint')}</small>
		</>
	);
};

LabelInputView.displayName = 'LabelInputView';
LabelInputView.defaultProps = {};

export default React.memo(LabelInputView);

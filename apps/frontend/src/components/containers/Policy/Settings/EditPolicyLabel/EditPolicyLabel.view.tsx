import React from 'react';
import { useTranslation } from 'react-i18next';

import EDInputFieldAvailability from '@/ui/EDInputFieldAvailability';
import EDAcceptButton from '@/ui/EDAcceptButton';

import classes from './EditPolicyLabel.module.scss';

interface IProps {
	readonly newPolicyLabelInput: string | null;
	readonly isNewPolicyLabelValid: boolean;
	readonly isNewPolicyLabelAvailable: boolean | null;
	readonly onNewPolicyLabelInputChange: (value: string) => void;
}

const EditPolicyLabelView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<>
			<h3 className={classes['title']}>{t('policy.settings.informationTitle')}</h3>

			<label className={classes['instructionText']} htmlFor="modifyPolicyLabelInput">
				{t('policy.settings.policyLabelLabel')}
			</label>
			<EDInputFieldAvailability
				id="modifyPolicyLabelInput"
				className={classes['input']}
				isAvailable={props.isNewPolicyLabelAvailable}
				value={props.newPolicyLabelInput}
				maxLength={30}
				placeholder={t('policy.settings.policyLabelInputPlacehoder')}
				onChange={props.onNewPolicyLabelInputChange}
			/>

			<EDAcceptButton disabled={!props.isNewPolicyLabelValid} type="submit">
				{t('policy.settings.submitButton')}
			</EDAcceptButton>
		</>
	);
};

EditPolicyLabelView.displayName = 'EditPolicyLabelView';
EditPolicyLabelView.defaultProps = {};

export default React.memo(EditPolicyLabelView);

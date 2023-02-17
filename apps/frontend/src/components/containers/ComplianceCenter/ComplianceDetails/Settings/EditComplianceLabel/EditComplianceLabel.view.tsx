import React from 'react';
import { useTranslation } from 'react-i18next';

import EDInputFieldAvailability from '@/ui/EDInputFieldAvailability';
import EDAcceptButton from '@/ui/EDAcceptButton';

import classes from './EditComplianceLabel.module.scss';

interface IProps {
	readonly newComplianceLabelInput: string | null;
	readonly isNewComplianceLabelValid: boolean;
	readonly isNewComplianceLabelAvailable: boolean | null;
	readonly onNewComplianceLabelInputChange: (value: string) => void;
}

const EditComplianceLabelView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<>
			<h3 className={classes['title']}>{t('complianceCenter.settings.informationTitle')}</h3>

			<label className={classes['instructionText']} htmlFor="modifyComplianceLabelInput">
				{t('complianceCenter.settings.complianceLabelLabel')}
			</label>
			<EDInputFieldAvailability
				id="modifyComplianceLabelInput"
				className={classes['input']}
				isAvailable={props.isNewComplianceLabelAvailable}
				value={props.newComplianceLabelInput}
				maxLength={30}
				placeholder={t('complianceCenter.settings.complianceLabelInputPlacehoder')}
				onChange={props.onNewComplianceLabelInputChange}
			/>

			<EDAcceptButton disabled={!props.isNewComplianceLabelValid} type="submit">
				{t('complianceCenter.settings.submitButton')}
			</EDAcceptButton>
		</>
	);
};

EditComplianceLabelView.displayName = 'EditComplianceLabelView';
EditComplianceLabelView.defaultProps = {};

export default React.memo(EditComplianceLabelView);

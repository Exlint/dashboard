import React from 'react';
import { useTranslation } from 'react-i18next';

import EDInputFieldAvailability from '@/ui/EDInputFieldAvailability';
import EDAcceptButton from '@/ui/EDAcceptButton';

import classes from './EditGroupLabel.module.scss';

interface IProps {
	readonly newGroupLabelInput: string | null;
	readonly isNewGroupLabelValid: boolean;
	readonly isNewGroupLabelAvailable: boolean | null;
	readonly onNewGroupLabelInputChange: (value: string) => void;
}

const EditGroupLabelView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<>
			<h3 className={classes['title']}>{t('groupCenter.settings.informationTitle')}</h3>

			<label className={classes['instructionText']} htmlFor="modifyGroupLabelInput">
				{t('groupCenter.settings.groupLabelLabel')}
			</label>
			<EDInputFieldAvailability
				id="modifyGroupLabelInput"
				className={classes['input']}
				isAvailable={props.isNewGroupLabelAvailable}
				value={props.newGroupLabelInput}
				maxLength={30}
				placeholder={t('groupCenter.settings.groupLabelInputPlacehoder')}
				onChange={props.onNewGroupLabelInputChange}
			/>

			<EDAcceptButton disabled={!props.isNewGroupLabelValid} type="submit">
				{t('groupCenter.settings.submitButton')}
			</EDAcceptButton>
		</>
	);
};

EditGroupLabelView.displayName = 'EditGroupLabelView';
EditGroupLabelView.defaultProps = {};

export default React.memo(EditGroupLabelView);

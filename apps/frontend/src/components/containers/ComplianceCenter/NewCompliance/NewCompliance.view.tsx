import React, { type FormEvent } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import EDSvg from '@/ui/EDSvg';
import EDInputFieldAvailability from '@/ui/EDInputFieldAvailability';
import EDInputField from '@/ui/EDInputField';
import EDAcceptButton from '@/ui/EDAcceptButton';

import classes from './NewCompliance.module.scss';

interface IProps {
	readonly complianceLabelInput: string | null;
	readonly complianceDescriptionInput: string | null;
	readonly isComplianceLabelValid: boolean;
	readonly isComplianceLabelAvailable: boolean | null;
	readonly onComplianceLabelInputChange: (value: string) => void;
	readonly onComplianceDescriptionInputChange: (value: string) => void;
	readonly onCreateCompliance: (e: FormEvent<HTMLFormElement>) => Promise<void>;
}

const NewComplianceView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<main className={classes['container']}>
			<header className={classes['header']}>
				<div className={classes['headerTitleContainer']}>
					<EDSvg className={classes['headerTitleContainer__icon']} name="compliance" />
					<h4 className={classes['headerTitleContainer__text']}>
						{t('complianceCenter.newCompliance.headerTitle')}
					</h4>
				</div>

				<div className={classes['tab']}>
					<EDSvg className={classes['tab__icon']} name="settings" />
					<span className={classes['tab__text']}>
						{t('complianceCenter.newCompliance.tabs.complianceCreation')}
					</span>
					<div className={classes['tab__border']} />
				</div>
			</header>

			<form className={classes['createForm']} onSubmit={props.onCreateCompliance}>
				<h3 className={classes['createForm__title']}>
					{t('complianceCenter.newCompliance.content.title')}
				</h3>
				<span className={classes['createForm__subTitle']}>
					{t('complianceCenter.newCompliance.content.subTitle')}
				</span>

				<hr className={classes['createForm__divider']} />

				<label className={classes['createForm__labelInputLabel']} htmlFor="newComplianceLabelInput">
					{t('complianceCenter.newCompliance.content.complianceLabelInputLabel')}
				</label>
				<EDInputFieldAvailability
					id="newComplianceLabelInput"
					className={classes['createForm__labelInput']}
					value={props.complianceLabelInput}
					placeholder={t('complianceCenter.newCompliance.content.complianceLabelInputPlaceholder')}
					isAvailable={props.isComplianceLabelAvailable}
					maxLength={30}
					onChange={props.onComplianceLabelInputChange}
				/>

				<label
					className={classes['createFormDescriptionLabel']}
					htmlFor="newComplianceDescriptionInput"
				>
					<span className={classes['createFormDescriptionLabel__text']}>
						{t('complianceCenter.newCompliance.content.complianceDescriptionInputLabelPrefix')}
						&nbsp;
					</span>
					<small className={classes['createFormDescriptionLabel__optional']}>
						<Trans>&#40;</Trans>
						{t('complianceCenter.newCompliance.content.complianceDescriptionInputLabelPostfix')}
						<Trans>&#41;</Trans>
					</small>
				</label>
				<EDInputField
					id="newComplianceDescriptionInput"
					value={props.complianceDescriptionInput}
					onChange={props.onComplianceDescriptionInputChange}
				/>

				<EDAcceptButton
					className={classes['createForm__submit']}
					type="submit"
					disabled={!props.isComplianceLabelValid}
				>
					{t('complianceCenter.newCompliance.content.createComplianceButton')}
				</EDAcceptButton>
			</form>
		</main>
	);
};

NewComplianceView.displayName = 'NewComplianceView';
NewComplianceView.defaultProps = {};

export default React.memo(NewComplianceView);

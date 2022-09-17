import React, { type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import EDSelectDate from '@/ui/EDSelectDate';
import type { IOption } from '@/ui/EDSelectDate/interfaces/option';

import { MONTH_INTERVAL, THREE_MONTHS_INTERVAL, WEEK_INTERVAL } from './models/time';
import LabelInput from './LabelInput';

import classes from './NewSecret.module.scss';

interface IProps {
	readonly secretLabelInput: string | null;
	readonly isSecretLabelValid: boolean;
	readonly selectedOptionIndex: number;
	readonly isSecretLabelAvailable: boolean | null;
	readonly onSecretLabelInputChange: (value: string) => void;
	readonly onSelectExpirationDate: (index: number, value: Date | null) => void;
	readonly onGenerateSecret: (e: FormEvent<HTMLFormElement>) => void;
}

const NewSecretView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	const currentDate = new Date();
	const nextWeekDate = new Date(currentDate.getTime() + WEEK_INTERVAL);
	const nextMonthDate = new Date(currentDate.getTime() + MONTH_INTERVAL);
	const nextThreeMonthsDate = new Date(currentDate.getTime() + THREE_MONTHS_INTERVAL);

	const dateSelectOptions: IOption[] = [
		{ value: nextWeekDate, label: `7 ${t('accountSettings.newSecret.dateSelect.days')}` },
		{ value: nextMonthDate, label: `30 ${t('accountSettings.newSecret.dateSelect.days')}` },
		{ value: nextThreeMonthsDate, label: `90 ${t('accountSettings.newSecret.dateSelect.days')}` },
		{ value: null, label: t('accountSettings.newSecret.dateSelect.custom'), withPicker: true },
		{ value: null, label: t('accountSettings.newSecret.dateSelect.noExpiration') },
	];

	return (
		<main className={classes['container']}>
			<section className={classes['actionSection']}>
				<h3 className={classes['actionSection__header']}>
					{t('accountSettings.newSecret.actionHeader')}
				</h3>

				<hr className={classes['actionSection__divider']} />

				<form className={classes['generateSecretForm']} onSubmit={props.onGenerateSecret}>
					<LabelInput
						secretLabelInput={props.secretLabelInput}
						isSecretLabelAvailable={props.isSecretLabelAvailable}
						onSecretLabelInputChange={props.onSecretLabelInputChange}
					/>

					<EDSelectDate
						options={dateSelectOptions}
						selectedIndex={props.selectedOptionIndex}
						hintText={t('accountSettings.newSecret.secretExpirationHint')}
						onSelect={props.onSelectExpirationDate}
					/>

					<hr className={classes['generateSecretForm__divider']} />

					<div className={classes['formActions']}>
						<button
							className={classes['formActions__submit']}
							type="submit"
							disabled={!props.isSecretLabelValid}
						>
							{t('accountSettings.newSecret.generateButton')}
						</button>
						<Link
							className={classes['formActions__cancel']}
							to="/account-settings/secret-management"
						>
							{t('accountSettings.newSecret.cancelButton')}
						</Link>
					</div>
				</form>
			</section>
		</main>
	);
};

NewSecretView.displayName = 'NewSecretView';
NewSecretView.defaultProps = {};

export default React.memo(NewSecretView);

import React from 'react';
import { useTranslation } from 'react-i18next';
import DatePicker from 'react-datepicker';

import { secretExpiry } from '@/data/secret-expiry';
import { concatClasses } from '@/utils/component';
import EDSelect from '@/ui/EDSelect';

import 'react-datepicker/dist/react-datepicker.css';
import classes from './LeftSide.module.scss';

interface IProps {
	readonly isExpiresClickedState: boolean | null;
	readonly expirySelectedIndexState: number | null;
	readonly labelState?: string | null;
	readonly secretLabel: string | null;
	readonly createSecretButtonState: boolean;
	readonly isSortByClickedState: boolean;
	readonly dispalyRightSideModal: boolean;
	readonly expiryDate: Date | string;
	readonly onDatePicker: (_: Date) => void;
	readonly onDisplayRightSide: () => void;
	readonly onLabelChange: (_: string) => void;
	readonly onSelectedSortBy: (_: number) => void;
	readonly onExpiresClicked: () => void;
	readonly onSortBy: () => void;
	readonly onSubmit: () => void;
}

const LeftSideView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	const secretCrationTitlesClasses = props.dispalyRightSideModal
		? concatClasses(classes, 'innerWrapper__title', 'innerWrapper__title--disabled')
		: classes['innerWrapper__title'];

	const selectClasses = props.dispalyRightSideModal
		? concatClasses(classes, 'select', 'select--disabled')
		: classes['select'];

	return (
		<section className={classes['container']}>
			<div className={classes['container__title']}>
				{t('tokenManagement.tokenManagementModal.secretCreationTitle')}
			</div>
			<div className={classes['innerWrapper']}>
				<span className={secretCrationTitlesClasses}>
					{t('tokenManagement.tokenManagementModal.label')}
				</span>
				<input
					className={classes['innerWrapper__input']}
					disabled={props.dispalyRightSideModal}
					type="text"
					maxLength={20}
					value={props.secretLabel ? props.secretLabel : props.labelState ? props.labelState : ''}
					onChange={({ currentTarget: { value } }) => props.onLabelChange(value)}
				/>
				<span className={secretCrationTitlesClasses}>
					{t('tokenManagement.tokenManagementModal.expires')}
				</span>
				<div className={classes['innerWrapper__selectWrapper']}>
					<EDSelect
						className={selectClasses}
						placeholder="Expires"
						options={secretExpiry}
						selectedOptionIndex={props.expirySelectedIndexState}
						onOptionSelect={props.onSelectedSortBy}
					/>
					{props.expirySelectedIndexState === 4 && !props.dispalyRightSideModal && (
						<DatePicker
							className={classes['datePicker']}
							selected={new Date(props.expiryDate)}
							onChange={(date: Date) => props.onDatePicker(date)}
						/>
					)}
				</div>
			</div>
			<button
				className={classes['container__button']}
				type="button"
				disabled={!props.createSecretButtonState}
				onClick={props.onSubmit}
			>
				{t('tokenManagement.tokenManagementModal.createSecretButton')}
			</button>
		</section>
	);
};

LeftSideView.displayName = 'LeftSideView';
LeftSideView.defaultProps = {};

export default React.memo(LeftSideView);

import React from 'react';
import { useTranslation } from 'react-i18next';
import DatePicker from 'react-datepicker';

import { secretExpiry } from '@/data/secret-expiry';
import { concatClasses } from '@/utils/component';
import SelectFromOptions from '@/ui/EDSelectFromOptions';

import 'react-datepicker/dist/react-datepicker.css';
import classes from './LeftSide.module.scss';

interface IProps {
	readonly isExpiresClickedState: boolean | null;
	readonly selectedSortByOptionIndexState: number | null;
	readonly labelState?: string;
	readonly createSecretButtonState: boolean;
	readonly isSortByClickedState: boolean;
	readonly dispalyModalRightSide: boolean;
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

	const secretCrationTitlesClasses = !props.dispalyModalRightSide
		? classes['innerWrapper__title']
		: concatClasses(classes, 'innerWrapper__title', 'innerWrapper__title--disabled');

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
					disabled={props.dispalyModalRightSide}
					type="text"
					maxLength={20}
					value={props.labelState ?? ''}
					onChange={({ currentTarget: { value } }) => props.onLabelChange(value)}
				/>
				<span className={secretCrationTitlesClasses}>
					{t('tokenManagement.tokenManagementModal.expires')}
				</span>
				<div className={classes['innerWrapper__select']}>
					<SelectFromOptions
						componentWidth="230px"
						defaultValue="Expires"
						border="1px solid #BBB8CA"
						selectedOptionIndex={props.selectedSortByOptionIndexState}
						placeholderColor={!props.dispalyModalRightSide ? '#4b4a65' : '#BBB8CA'}
						isDisabled={props.dispalyModalRightSide}
						isShowMoreClicked={props.isSortByClickedState}
						optionsList={secretExpiry}
						onSelectOptionsButton={props.onSortBy}
						onSelectedOption={props.onSelectedSortBy}
					/>
					{props.selectedSortByOptionIndexState === 4 && !props.dispalyModalRightSide && (
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

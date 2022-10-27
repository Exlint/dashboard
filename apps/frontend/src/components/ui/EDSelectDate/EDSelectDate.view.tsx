import React, { type RefObject } from 'react';
import DatePicker from 'react-datepicker';
import enUS from 'date-fns/locale/en-US';

import { concatClasses } from '@/utils/component';

import EDSvg from '../EDSvg';
import type { IOption } from './interfaces/option';
import { formatDate } from './utils/format-date';

import classes from './EDSelectDate.module.scss';

interface IProps {
	readonly selectRef: RefObject<HTMLDivElement>;
	readonly isSelectVisible: boolean;
	readonly options: IOption[];
	readonly selectedIndex: number;
	readonly hintText: string;
	readonly datePickerDate: Date;
	readonly toggleSelectVisibility: VoidFunction;
	readonly onSelect: (index: number, value: Date | null) => void;
	readonly onPickDate: (index: number, value: Date) => void;
}

const EDSelectDateView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const selectedOption = props.options[props.selectedIndex]!;

	const selectOptionClickHandler = (index: number, value: Date | null) => {
		props.onSelect(index, value);
		props.toggleSelectVisibility();
	};

	return (
		<div className={classes['container']}>
			<div ref={props.selectRef} className={classes['select']}>
				<div
					className={concatClasses(
						classes,
						'selectedOptionContainer',
						props.isSelectVisible ? 'selectedOptionContainer--open' : null,
					)}
					onClick={props.toggleSelectVisibility}
				>
					<span className={classes['selectedOptionContainer__text']}>{selectedOption.label}</span>
					<EDSvg className={classes['selectedOptionContainer__icon']} name="strokeArrowDown" />
				</div>

				{props.isSelectVisible && (
					<div className={classes['optionsContainer']}>
						{props.options.map((option, index) => (
							<span
								key={index}
								className={classes['optionsContainer__option']}
								onClick={() => selectOptionClickHandler(index, option.value)}
							>
								{option.label}
							</span>
						))}
					</div>
				)}
			</div>

			{selectedOption.withPicker && (
				<DatePicker
					className={classes['datePickerValueText']}
					dayClassName={() => classes['datePickerDayText']!}
					wrapperClassName={classes['datePickerWrapper']}
					weekDayClassName={() => classes['datePickerWeekDay']!}
					selected={props.datePickerDate || new Date()}
					locale={enUS}
					adjustDateOnChange
					minDate={new Date()}
					onChange={(date: Date) => props.onPickDate(props.selectedIndex, date)}
				/>
			)}

			{selectedOption.value !== null && (
				<span className={classes['container__hintText']}>
					{props.hintText}
					&nbsp;
					{formatDate(selectedOption.value)}
				</span>
			)}
		</div>
	);
};

EDSelectDateView.displayName = 'EDSelectDateView';
EDSelectDateView.defaultProps = {};

export default React.memo(EDSelectDateView);

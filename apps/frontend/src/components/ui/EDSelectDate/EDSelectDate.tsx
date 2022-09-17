import React, { useState } from 'react';

import { useClickOutside } from '@/hooks/click-outside';

import type { IOption } from './interfaces/option';

import EDSelectDateView from './EDSelectDate.view';

interface IProps {
	readonly options: IOption[];
	readonly selectedIndex: number;
	readonly hintText: string;
	readonly onSelect: (index: number, value: Date | null) => void;
}

const EDSelectDate: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const {
		ref: selectRef,
		isVisible: isSelectVisible,
		toggleVisibility: toggleSelectVisibility,
	} = useClickOutside<HTMLDivElement>(false);

	const [datePickerDateState, setDatePickerDateState] = useState<Date>(new Date());

	const onPickDate = (index: number, value: Date) => {
		setDatePickerDateState(() => value);
		props.onSelect(index, value);
	};

	return (
		<EDSelectDateView
			selectRef={selectRef}
			isSelectVisible={isSelectVisible}
			toggleSelectVisibility={toggleSelectVisibility}
			selectedIndex={props.selectedIndex}
			datePickerDate={datePickerDateState}
			options={props.options}
			hintText={props.hintText}
			onSelect={props.onSelect}
			onPickDate={onPickDate}
		/>
	);
};

EDSelectDate.displayName = 'EDSelectDate';
EDSelectDate.defaultProps = {};

export default React.memo(EDSelectDate);

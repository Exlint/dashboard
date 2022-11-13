import React, { useState } from 'react';

import { useClickOutside } from '@/hooks/click-outside';
import EDMultiSelectView from './EDMultiSelect.view';

import type { IOption } from './interfaces/option';

interface IProps<T> {
	readonly className?: string;
	readonly optionsClassName?: string;
	readonly wrapperClassName?: string;
	readonly placeholder?: string;
	readonly options: IOption<T>[];
	readonly selectedValues: T[] | null;
	readonly onSelect: (_: T) => void;
	readonly onRemove: (_: T) => void;
}

const EDMultiSelect = <T,>(props: React.PropsWithChildren<IProps<T>>) => {
	const {
		ref: selectRef,
		isVisible: isSelectVisible,
		toggleVisibility: toggleSelectVisibility,
	} = useClickOutside<HTMLDivElement>(false);

	const [selectedOptions, setSelectedOptions] = useState<IOption<T>[]>([]);

	const onAddOption = (option: IOption<T>) => {
		setSelectedOptions([...selectedOptions, option]);
	};

	const onRemoveOption = (option: IOption<T>) => {
		setSelectedOptions(selectedOptions.filter((selectedOption) => selectedOption.value !== option.value));
	};

	const remaningOptions = props.options.filter((option) => {
		if (props.selectedValues) {
			return !props.selectedValues.find((selectedOption) => selectedOption === option.value);
		}

		return true;
	});

	return (
		<EDMultiSelectView
			selectedOptions={selectedOptions}
			wrapperClassName={props.wrapperClassName}
			optionsClassName={props.optionsClassName}
			placeholder={props.placeholder}
			className={props.className}
			selectRef={selectRef}
			isSelectVisible={isSelectVisible}
			options={remaningOptions}
			toggleSelectVisibility={toggleSelectVisibility}
			onSelect={props.onSelect}
			onRemove={props.onRemove}
			onAddOption={onAddOption}
			onRemoveOption={onRemoveOption}
		/>
	);
};

EDMultiSelect.displayName = 'EDMultiSelect';
EDMultiSelect.defaultProps = {};

export default React.memo(EDMultiSelect);

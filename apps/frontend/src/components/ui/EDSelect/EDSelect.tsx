import React from 'react';

import { useClickOutside } from '@/hooks/click-outside';

import type { IOption } from './interfaces/option';

import EDSelectView from './EDSelect.view';

interface IProps<T> {
	readonly className?: string;
	readonly optionsClassName?: string;
	readonly wrapperClassName?: string;
	readonly options: IOption<T>[];
	readonly selectedIndex: number;
	readonly prefix?: string;
	readonly onSelect: (index: number) => void;
}

const EDSelect = <T,>(props: React.PropsWithChildren<IProps<T>>) => {
	const {
		ref: selectRef,
		isVisible: isSelectVisible,
		toggleVisibility: toggleSelectVisibility,
	} = useClickOutside<HTMLDivElement>(false);

	const optionsLabels = props.options.map((option) => option.label);

	return (
		<EDSelectView
			wrapperClassName={props.wrapperClassName}
			optionsClassName={props.optionsClassName}
			className={props.className}
			selectRef={selectRef}
			isSelectVisible={isSelectVisible}
			options={optionsLabels}
			selectedIndex={props.selectedIndex}
			prefix={props.prefix}
			toggleSelectVisibility={toggleSelectVisibility}
			onSelect={props.onSelect}
		/>
	);
};

EDSelect.displayName = 'EDSelect';
EDSelect.defaultProps = {};

export default React.memo(EDSelect);

import React from 'react';

import { useClickOutside } from '@/hooks/click-outside';

import EdSelectView from './EDSelect.view';

interface IProps {
	readonly className?: string;
	readonly placeholder?: string;
	readonly options: string[];
	readonly selectedOptionIndex: number | null;
	readonly onOptionSelect: (index: number) => void;
}

const EDSelect: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const {
		ref: tooltopRef,
		isVisible: isTooltipVisible,
		toggleVisibility: toggleTooltipVisibility,
	} = useClickOutside<HTMLDivElement>(false);

	const onOptionSelect = (index: number) => {
		props.onOptionSelect(index);
		toggleTooltipVisibility();
	};

	return (
		<EdSelectView
			className={props.className}
			placeholder={props.placeholder}
			options={props.options}
			selectedOptionIndex={props.selectedOptionIndex}
			tooltopRef={tooltopRef}
			isTooltipVisible={isTooltipVisible}
			toggleTooltipVisibility={toggleTooltipVisibility}
			onOptionSelect={onOptionSelect}
		/>
	);
};

EDSelect.displayName = 'EDSelect';
EDSelect.defaultProps = {};

export default React.memo(EDSelect);

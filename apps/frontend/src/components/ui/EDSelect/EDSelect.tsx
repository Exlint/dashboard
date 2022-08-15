import React from 'react';

import { useClickOutside } from '@/hooks/click-outside';

import EdSelectView from './EDSelect.view';

interface IProps {
	readonly defaultValue?: string;
	readonly className?: string;
	readonly selectedOptionIndex: number | null;
	readonly optionsList: string[];
	readonly onSelect: (index: number) => void;
}

const EDSelect: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const {
		ref: tooltopRef,
		isVisible: isTooltipVisible,
		toggleVisibility: toggleTooltipVisibility,
	} = useClickOutside<HTMLDivElement>(false);

	const onSelect = (index: number) => {
		props.onSelect(index);
		toggleTooltipVisibility();
	};

	return (
		<EdSelectView
			defaultValue={props.defaultValue}
			className={props.className}
			selectedOptionIndex={props.selectedOptionIndex}
			optionsList={props.optionsList}
			tooltopRef={tooltopRef}
			isTooltipVisible={isTooltipVisible}
			toggleTooltipVisibility={toggleTooltipVisibility}
			onSelect={onSelect}
		/>
	);
};

EDSelect.displayName = 'EDSelect';
EDSelect.defaultProps = {};

export default React.memo(EDSelect);

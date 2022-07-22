import React from 'react';

import SelectFromOptionsView from './SelectFromOptions.view';

interface IProps {
	readonly defaultValue?: string;
	readonly componentWidth: string;
	readonly border: string;
	readonly selectedOptionIndex: number | null;
	readonly placeholderColor?: string;
	readonly isDisabled?: boolean;
	readonly isShowMoreClicked: boolean;
	readonly optionsList: string[];
	readonly isVisibleValueBlocked?: boolean;
	readonly onSelectOptionsButton: () => void;
	readonly onSelectedOption: (index: number) => void;
}

const SelectFromOptions: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<SelectFromOptionsView
			defaultValue={props.defaultValue}
			componentWidth={props.componentWidth}
			border={props.border}
			placeholderColor={props.placeholderColor}
			isDisabled={props.isDisabled}
			selectedOptionIndex={props.selectedOptionIndex}
			isShowMoreClicked={props.isShowMoreClicked}
			optionsList={props.optionsList}
			isVisibleValueBlocked={props?.isVisibleValueBlocked}
			onSelectOptionsButton={props.onSelectOptionsButton}
			onSelectedOption={props.onSelectedOption}
		/>
	);
};

SelectFromOptions.displayName = 'SelectFromOptions';
SelectFromOptions.defaultProps = {};

export default React.memo(SelectFromOptions);

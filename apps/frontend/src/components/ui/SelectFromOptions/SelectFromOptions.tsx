import React from 'react';

import SelectFromOptionsView from './SelectFromOptions.view';

interface IProps {
	readonly defaultValue?: string;
	readonly componentWidth: string;
	readonly border: string;
	readonly selectedOptionIndex: number | null;
	readonly isShowMoreClicked: boolean;
	readonly optionsList: string[];
	readonly onSelectOptionsButton: () => void;
	readonly onSelectedOption: (index: number) => void;
}

const SelectFromOptions: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<SelectFromOptionsView
			defaultValue={props.defaultValue}
			componentWidth={props.componentWidth}
			border={props.border}
			selectedOptionIndex={props.selectedOptionIndex}
			isShowMoreClicked={props.isShowMoreClicked}
			optionsList={props.optionsList}
			onSelectOptionsButton={props.onSelectOptionsButton}
			onSelectedOption={props.onSelectedOption}
		/>
	);
};

SelectFromOptions.displayName = 'SelectFromOptions';
SelectFromOptions.defaultProps = {};

export default React.memo(SelectFromOptions);

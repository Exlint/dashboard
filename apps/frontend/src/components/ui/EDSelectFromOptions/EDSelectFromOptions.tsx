import React from 'react';

import EDSelectFromOptionsView from './EDSelectFromOptions.view';

interface IProps {
	readonly defaultValue?: string;
	readonly componentWidth: string;
	readonly border: string;
	readonly selectedOptionIndex: number | null;
	readonly isShowMoreClicked: boolean;
	readonly optionsList: string[];
	readonly isVisibleValueBlocked?: boolean;
	readonly onSelectOptionsButton: () => void;
	readonly onSelectedOption: (index: number) => void;
}

const EDSelectFromOptions: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<EDSelectFromOptionsView
			defaultValue={props.defaultValue}
			componentWidth={props.componentWidth}
			border={props.border}
			selectedOptionIndex={props.selectedOptionIndex}
			isShowMoreClicked={props.isShowMoreClicked}
			optionsList={props.optionsList}
			isVisibleValueBlocked={props?.isVisibleValueBlocked}
			onSelectOptionsButton={props.onSelectOptionsButton}
			onSelectedOption={props.onSelectedOption}
		/>
	);
};

EDSelectFromOptions.displayName = 'EDSelectFromOptions';
EDSelectFromOptions.defaultProps = {};

export default React.memo(EDSelectFromOptions);

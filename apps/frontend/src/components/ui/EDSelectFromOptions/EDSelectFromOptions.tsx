import React from 'react';

import EdSelectFromOptionsView from './EDSelectFromOptions.view';

interface IProps {
	readonly defaultValue?: string;
	readonly componentWidth: string;
	readonly border: string;
	readonly selectedOptionIndex: number | null;
	readonly isShowMoreClicked: boolean;
	readonly optionsList: string[];
	readonly isVisibleValueBlocked?: boolean;
	readonly toggleSortByOpen: () => void;
	readonly toggleSortByClose: () => void;
	readonly onSelectedOption: (index: number) => void;
}

const EDSelectFromOptions: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<EdSelectFromOptionsView
			defaultValue={props.defaultValue}
			componentWidth={props.componentWidth}
			border={props.border}
			selectedOptionIndex={props.selectedOptionIndex}
			isShowMoreClicked={props.isShowMoreClicked}
			optionsList={props.optionsList}
			isVisibleValueBlocked={props?.isVisibleValueBlocked}
			toggleSortByOpen={props.toggleSortByOpen}
			toggleSortByClose={props.toggleSortByClose}
			onSelectedOption={props.onSelectedOption}
		/>
	);
};

EDSelectFromOptions.displayName = 'EDSelectFromOptions';
EDSelectFromOptions.defaultProps = {};

export default React.memo(EDSelectFromOptions);

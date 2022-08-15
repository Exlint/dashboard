import React from 'react';

import EdSelectView from './EDSelect.view';

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

const EDSelect: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<EdSelectView
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

EDSelect.displayName = 'EDSelect';
EDSelect.defaultProps = {};

export default React.memo(EDSelect);

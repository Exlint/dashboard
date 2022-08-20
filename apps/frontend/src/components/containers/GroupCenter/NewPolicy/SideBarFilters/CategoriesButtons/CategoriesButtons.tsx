import React from 'react';

import CategoriesButtonsView from './CategoriesButtons.view';

interface IProps {
	readonly index: number;
	readonly selectedCategoryIndex: number;
	readonly onSelectCategory: (_: number) => void;
}

const CategoriesButtons: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<CategoriesButtonsView
			index={props.index}
			selectedCategoryIndex={props.selectedCategoryIndex}
			onSelectCategory={props.onSelectCategory}
		/>
	);
};

CategoriesButtons.displayName = 'CategoriesButtons';
CategoriesButtons.defaultProps = {};

export default React.memo(CategoriesButtons);

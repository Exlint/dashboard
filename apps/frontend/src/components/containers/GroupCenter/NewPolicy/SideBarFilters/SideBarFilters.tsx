import React, { useEffect } from 'react';

import SideBarFiltersView from './SideBarFilters.view';

interface IProps {
	readonly selectedTypeIndex: number;
	readonly selectedCategoryIndex: number;
	readonly onSelectType: (_: number) => void;
	readonly onSelectCategory: (_: number) => void;
}

const SideBarFilters: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	useEffect(() => {
		props.onSelectType(-1);
		props.onSelectCategory(-1);
	}, []);

	return (
		<SideBarFiltersView
			selectedTypeIndex={props.selectedTypeIndex}
			selectedCategoryIndex={props.selectedCategoryIndex}
			onSelectType={props.onSelectType}
			onSelectCategory={props.onSelectCategory}
		/>
	);
};

SideBarFilters.displayName = 'SideBarFilters';
SideBarFilters.defaultProps = {};

export default React.memo(SideBarFilters);

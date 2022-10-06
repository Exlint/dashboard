import React from 'react';

import type { ICategoryFilter, ILanguageFilter, ITypeFilter } from '../interfaces/type-filters';

import SideFiltersView from './SideFilters.view';

interface IProps {
	readonly languageFilter: ILanguageFilter;
	readonly typeFilter: ITypeFilter;
	readonly categoryFilter: ICategoryFilter;
	readonly onSetLanguageFilter: (value: ILanguageFilter) => void;
	readonly onSetTypeFilter: (value: ITypeFilter) => void;
	readonly onSetCategoryFilter: (value: ICategoryFilter) => void;
}

const SideFilters: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<SideFiltersView
			languageFilter={props.languageFilter}
			typeFilter={props.typeFilter}
			categoryFilter={props.categoryFilter}
			onSetLanguageFilter={props.onSetLanguageFilter}
			onSetTypeFilter={props.onSetTypeFilter}
			onSetCategoryFilter={props.onSetCategoryFilter}
		/>
	);
};

SideFilters.displayName = 'SideFilters';
SideFilters.defaultProps = {};

export default React.memo(SideFilters);

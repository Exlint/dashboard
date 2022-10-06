import React from 'react';

import type { ICategoryFilter, ILanguageFilter, ITypeFilter } from '../../interfaces/type-filters';
import type { IOption } from '../interfaces/option';

import FilterView from './Filter.view';

declare module 'react' {
	function memo<A, B>(Component: (props: A) => B): (props: A) => React.ReactElement | null;
}

interface IProps<T = ILanguageFilter | ITypeFilter | ICategoryFilter> {
	readonly title: string;
	readonly options: IOption<T>[];
	readonly selectedOption: T;
	readonly onSelectOption: (value: T) => void;
}

const Filter = <T = ILanguageFilter | ITypeFilter | ICategoryFilter,>(
	props: React.PropsWithChildren<IProps<T>>,
) => {
	return (
		<FilterView
			title={props.title}
			options={props.options}
			selectedOption={props.selectedOption}
			onSelectOption={props.onSelectOption}
		/>
	);
};

Filter.displayName = 'Filter';
Filter.defaultProps = {};

export default React.memo(Filter);

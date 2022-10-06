import React from 'react';

import { concatClasses } from '@/utils/component';

import type { IOption } from '../interfaces/option';
import type { ICategoryFilter, ILanguageFilter, ITypeFilter } from '../../interfaces/type-filters';

import classes from './Filter.module.scss';

interface IProps<T = ILanguageFilter | ITypeFilter | ICategoryFilter> {
	readonly title: string;
	readonly options: IOption<T>[];
	readonly selectedOption: T;
	readonly onSelectOption: (value: T) => void;
}

const FilterView = <T = ILanguageFilter | ITypeFilter | ICategoryFilter,>(
	props: React.PropsWithChildren<IProps<T>>,
) => {
	return (
		<div className={classes['container']}>
			<h5 className={classes['container__title']}>{props.title}</h5>

			{props.options.map((option, index) => (
				<button
					key={index}
					className={concatClasses(
						classes,
						'container__option',
						props.selectedOption === option.value ? 'container__option--selected' : null,
					)}
					type="button"
					onClick={() => props.onSelectOption(option.value)}
				>
					{option.label}
				</button>
			))}
		</div>
	);
};

FilterView.displayName = 'FilterView';
FilterView.defaultProps = {};

export default React.memo(FilterView);

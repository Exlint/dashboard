import React from 'react';
import { useTranslation } from 'react-i18next';

import type { ICategoryFilter, ILanguageFilter, ITypeFilter } from '../interfaces/type-filters';
import type { IOption } from './interfaces/option';

import Filter from './Filter';

import classes from './SideFilters.module.scss';

interface IProps {
	readonly languageFilter: ILanguageFilter;
	readonly typeFilter: ITypeFilter;
	readonly categoryFilter: ICategoryFilter;
	readonly onSetLanguageFilter: (value: ILanguageFilter) => void;
	readonly onSetTypeFilter: (value: ITypeFilter) => void;
	readonly onSetCategoryFilter: (value: ICategoryFilter) => void;
}

const SideFiltersView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	const languageOptions: IOption<ILanguageFilter>[] = [
		{ value: 'All', label: t('newPolicy.librarySelection.filters.all') },
		{ value: 'JavaScript', label: 'JavaScript' },
		{ value: 'CSSHTML', label: 'CSS/HTML' },
		{ value: 'Agnostic', label: t('newPolicy.librarySelection.filters.agnostic') },
	];

	const typeOptions: IOption<ITypeFilter>[] = [
		{ value: 'All', label: t('newPolicy.librarySelection.filters.all') },
		{ value: 'Linters', label: t('newPolicy.librarySelection.filters.linters') },
		{ value: 'Formatters', label: t('newPolicy.librarySelection.filters.formatters') },
	];

	const categoryOptions: IOption<ICategoryFilter>[] = [
		{ value: 'All', label: t('newPolicy.librarySelection.filters.all') },
		{ value: 'Code', label: t('newPolicy.librarySelection.filters.code') },
		{ value: 'File System', label: t('newPolicy.librarySelection.filters.fileSystem') },
		{ value: 'Styles', label: t('newPolicy.librarySelection.filters.styles') },
		{ value: 'Dependencies', label: t('newPolicy.librarySelection.filters.dependencies') },
	];

	return (
		<div className={classes['container']}>
			<Filter
				title={t('newPolicy.librarySelection.filters.languageTitle')}
				options={languageOptions}
				selectedOption={props.languageFilter}
				onSelectOption={props.onSetLanguageFilter}
			/>
			<Filter
				title={t('newPolicy.librarySelection.filters.typeFilter')}
				options={typeOptions}
				selectedOption={props.typeFilter}
				onSelectOption={props.onSetTypeFilter}
			/>
			<Filter
				title={t('newPolicy.librarySelection.filters.categoryFilter')}
				options={categoryOptions}
				selectedOption={props.categoryFilter}
				onSelectOption={props.onSetCategoryFilter}
			/>
		</div>
	);
};

SideFiltersView.displayName = 'SideFiltersView';
SideFiltersView.defaultProps = {};

export default React.memo(SideFiltersView);

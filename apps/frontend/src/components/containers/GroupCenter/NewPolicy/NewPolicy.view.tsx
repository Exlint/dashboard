/* eslint-disable max-lines */
import React from 'react';
import { useTranslation } from 'react-i18next';

import type { ILibrary } from '@/interfaces/library';
import EDSvg from '@/ui/EDSvg';
import EDSelectFromOptions from '@/ui/EDSelectFromOptions';

import { sortByOptions } from '@/data/new-policy-sort-by-options';
import { categories, types } from '@/data/policies-filter';

import SideBarFilters from './SideBarFilters';
import LibrariesList from './LibrariesList';

import classes from './NewPolicy.module.scss';
import PolicyConfigurationButton from './PolicyConfigurationButton';

interface IProps {
	readonly selectedGroupId: string;
	readonly selectedLibrary: ILibrary | null;
	readonly policyLabelInput: string | null;
	readonly isPolicyConfigurationClicked: boolean | null;
	readonly searchLibraryInput: string | null;
	readonly isSortByOnView: boolean;
	readonly selectedSortByOptionIndex: number | null;
	readonly isCreatePolicyDisabled: boolean;
	readonly selectedTypeIndex: number;
	readonly selectedCategoryIndex: number;
	readonly onSelectedLibrary: (library: ILibrary) => void;
	readonly onCancelSelectedLibrary: () => void;
	readonly onPolicyLabelInputChanged: (input: string) => void;
	readonly onPolicyConfiguratoinClicked: () => void;
	readonly onSearchLibraryInput: (input: string) => void;
	readonly onSelectedSortBy: (index: number) => void;
	readonly toggleSortBy: () => void;
	readonly onSelectType: (index: number) => void;
	readonly onSelectCategory: (index: number) => void;
}

const NewPolicyView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();
	const selectedLibraryName = props.selectedLibrary?.title;
	const selectedTypeFromFilter = types[props.selectedTypeIndex];
	const selectedCetegotyFromFilter = categories[props.selectedCategoryIndex];

	return (
		<section className={classes['newPolicy']}>
			<div className={classes['innerNewPolicy']}>
				<div className={classes['topPartContainer']}>
					<h3 className={classes['topPartContainer__title']}>
						{t('groupCenter.newPolicy.header')}
					</h3>
					<div className={classes['policyConfigurationButtonContainer']}>
						<PolicyConfigurationButton
							selectedGroupId={props.selectedGroupId}
							selectedLibraryName={selectedLibraryName}
							policyLabelInput={props.policyLabelInput}
							isButtonDisabled={props.isCreatePolicyDisabled}
						/>
					</div>
				</div>
				<div className={classes['searchContainer']}>
					<div className={classes['policyLabel']}>
						<span className={classes['policyLabel__text']}>
							{t('groupCenter.newPolicy.label')}
						</span>
						<input
							className={classes['policyLabel__input']}
							placeholder="Enter policy label"
							onChange={({ currentTarget: { value } }) =>
								props.onPolicyLabelInputChanged(value)
							}
						/>
					</div>
					<div className={classes['libraryAndSortBy']}>
						<div className={classes['library']}>
							<span className={classes['library__text']}>
								{t('groupCenter.newPolicy.library')}
							</span>
							<div className={classes['libraryInputContainer']}>
								<EDSvg className={classes['libraryInputContainer__icon']} name="search" />
								<input
									className={classes['libraryInputContainer__input']}
									placeholder="Search library"
									onChange={({ currentTarget: { value } }) =>
										props.onSearchLibraryInput(value)
									}
								/>
							</div>
						</div>
						<div className={classes['sortByContainer']}>
							<EDSelectFromOptions
								componentWidth="200px"
								defaultValue="Sort by"
								border="2px solid #E7E7E7"
								selectedOptionIndex={props.selectedSortByOptionIndex}
								isShowMoreClicked={props.isSortByOnView}
								optionsList={sortByOptions}
								onSelectOptionsButton={props.toggleSortBy}
								onSelectedOption={props.onSelectedSortBy}
							/>
						</div>
					</div>
				</div>
				<div className={classes['innerLibrary']}>
					<SideBarFilters
						selectedTypeIndex={props.selectedTypeIndex}
						selectedCategoryIndex={props.selectedCategoryIndex}
						onSelectType={props.onSelectType}
						onSelectCategory={props.onSelectCategory}
					/>
					<LibrariesList
						selectedLibrary={props.selectedLibrary}
						searchLibraryInput={props.searchLibraryInput}
						selectedSortByOptionIndex={props.selectedSortByOptionIndex}
						selectedTypeFromFilter={selectedTypeFromFilter!}
						selectedCetegotyFromFilter={selectedCetegotyFromFilter!}
						onSelectedLibrary={props.onSelectedLibrary}
						onCancelSelectedLibrary={props.onCancelSelectedLibrary}
					/>
				</div>
			</div>
		</section>
	);
};

NewPolicyView.displayName = 'NewPolicyView';
NewPolicyView.defaultProps = {};

export default React.memo(NewPolicyView);

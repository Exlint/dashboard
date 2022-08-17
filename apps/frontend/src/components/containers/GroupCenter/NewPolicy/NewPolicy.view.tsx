import React from 'react';
import { useTranslation } from 'react-i18next';

import EDSvg from '@/ui/EDSvg';
import EDSelect from '@/ui/EDSelect';
import { sortByOptions } from '@/data/new-policy-sort-by-options';

import SideBarFilters from './SideBarFilters';
import LibrariesList from './LibrariesList';

import classes from './NewPolicy.module.scss';
import PolicyConfigurationButton from './PolicyConfigurationButton';

interface IProps {
	readonly selectedGroupId: string;
	readonly selectedLibrary: string | null;
	readonly policyLabelInput: string | null;
	readonly isPolicyConfigurationClicked: boolean | null;
	readonly searchLibraryInput: string | null;
	readonly selectedSortByOptionIndex: number | null;
	readonly isCreatePolicyDisabled: boolean;
	readonly selectedTypeIndex: number;
	readonly selectedCategoryIndex: number;
	readonly onSelectLibrary: (libraryName: string) => void;
	readonly onCancelSelectedLibrary: () => void;
	readonly onPolicyLabelInputChanged: (input: string) => void;
	readonly onPolicyConfiguratoinClicked: () => void;
	readonly onSearchLibraryInput: (input: string) => void;
	readonly onSelect: (index: number) => void;
	readonly onSelectType: (index: number) => void;
	readonly onSelectCategory: (index: number) => void;
}

const NewPolicyView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

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
							selectedLibrary={props.selectedLibrary}
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
						<EDSelect
							placeholder="Sort by"
							selectedOptionIndex={props.selectedSortByOptionIndex}
							options={sortByOptions}
							onOptionSelect={props.onSelect}
						/>
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
						selectedTypeIndex={props.selectedTypeIndex}
						selectedCategoryIndex={props.selectedCategoryIndex}
						onSelectLibrary={props.onSelectLibrary}
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

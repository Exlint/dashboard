/* eslint-disable max-lines */
import React from 'react';
import { useTranslation } from 'react-i18next';

import { ILibrary } from '@/interfaces/library';
import EDSvg from '@/ui/EDSvg';
import SelectFromOptions from '@/ui/SelectFromOptions';

import { sortByOptions } from '@/data/new-policy-sort-by-options';

import SideBarFilters from './SideBarFilters';
import LibrariesList from './LibrariesList';

import classes from './NewPolicy.module.scss';
import PolicyConfigurationButton from './PolicyConfigurationButton';

interface IProps {
	readonly selectedGroupId: string;
	readonly selectedLibrary: ILibrary | null;
	readonly policyLabelInput: string | null;
	readonly isPolicyConfigurationClicked: boolean | null;
	readonly isSortByOnView: boolean;
	readonly selectedSortByOptionIndex: number | null;
	readonly isCreatePolicyDisabled: boolean;
	readonly onSelectedLibrary: (library: ILibrary) => void;
	readonly onCancelSelectedLibrary: () => void;
	readonly onPolicyLabelInputChanged: (input: string) => void;
	readonly onPolicyConfiguratoinClicked: () => void;
	readonly onSelectedSortBy: (index: number) => void;
	readonly toggleSortBy: () => void;
}

const NewPolicyView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<section className={classes['newPolicy']}>
			<div className={classes['innerNewPolicy']}>
				<h3 className={classes['innerNewPolicy__title']}>{t('groupCenter.newPolicy.header')}</h3>
				<div className={classes['policyConfigurationButtonContainer']}>
					<PolicyConfigurationButton
						selectedGroupId={props.selectedGroupId}
						selectedLibrary={props.selectedLibrary}
						policyLabelInput={props.policyLabelInput}
						isButtonDisabled={props.isCreatePolicyDisabled}
					/>
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
								<EDSvg className={classes['libraryInputContainer__icon']} name="searchIcon" />
								<input
									className={classes['libraryInputContainer__input']}
									placeholder="Search library"
								/>
							</div>
						</div>
						<div className={classes['sortByContainer']}>
							<SelectFromOptions
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
					<SideBarFilters />
					<LibrariesList
						selectedLibrary={props.selectedLibrary}
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

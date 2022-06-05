/* eslint-disable max-lines */
import React from 'react';
import { Link } from 'react-router-dom';
import { ILibrary } from '@/interfaces/library';
import VSvg from '@/ui/VSvg';
import SelectFromOptions from '@/ui/SelectFromOptions';

import { sortByOptions } from '@/data/newPolicySortByOptions';
import SideBarFilters from './SideBarFilters';
import LibrariesList from './LibrariesList';
import PolicyConfigurationButton from './PolicyConfigurationButton';

// import { Trans, useTranslation } from 'react-i18next';

import classes from './NewPolicy.module.scss';

interface IProps {
	readonly isSortByClicked: boolean;
	readonly policyLabelInput: string | null;
	readonly selectedLibrary: ILibrary | null;
	readonly isPolicyConfigurationClicked: boolean | null;
	readonly selectedSortByOptionIndex: number | null;
	readonly onSelectedSortBy: (index: number) => void;
	readonly onPolicyConfiguratoinClicked: () => void;
	readonly onPolicyLabelInputChanged: (input: string) => void;
	readonly onSelectedLibrary: (library: ILibrary) => void;
	readonly onCancelSelectedLibrary: () => void;
	readonly onSortBy: () => void;
}

const NewPolicyView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	// const { t } = useTranslation();

	return (
		<section className={classes['newPolicy']}>
			<div className={classes['innerNewPolicy']}>
				<h3 className={classes['innerNewPolicy__title']}>New Policy</h3>
				<div className={classes['policyConfigurationButtonContainer']}>
					{props.selectedLibrary && props.policyLabelInput ? (
						<Link
							to="/groupCenter/group/Policy/Configurations-Onboarding"
							className={classes['policyConfigurationButtonContainer__link']}
						>
							<PolicyConfigurationButton
								selectedLibrary={props.selectedLibrary}
								policyLabelInput={props.policyLabelInput}
								onPolicyConfiguratoinClicked={props.onPolicyConfiguratoinClicked}
							/>
						</Link>
					) : (
						<PolicyConfigurationButton
							selectedLibrary={props.selectedLibrary}
							policyLabelInput={props.policyLabelInput}
							onPolicyConfiguratoinClicked={props.onPolicyConfiguratoinClicked}
						/>
					)}
				</div>
				<div className={classes['searchContainer']}>
					<div className={classes['policyLabel']}>
						<span className={classes['policyLabel__text']}>Label:</span>
						<input
							className={classes['policyLabel__input']}
							placeholder="Enter policy label"
							style={{
								borderColor:
									(props.isPolicyConfigurationClicked && props.policyLabelInput === null) ||
									(props.isPolicyConfigurationClicked &&
										props.policyLabelInput?.length === 0)
										? '#781D1D'
										: '#e7e7e7',
							}}
							onChange={({ currentTarget: { value } }) =>
								props.onPolicyLabelInputChanged(value)
							}
						/>
					</div>
					<div className={classes['libraryAndSortBy']}>
						<div className={classes['library']}>
							<span className={classes['library__text']}>Library:</span>
							<div className={classes['libraryInputContainer']}>
								<VSvg className={classes['libraryInputContainer__icon']} name="searchIcon" />
								<input
									className={classes['libraryInputContainer__input']}
									placeholder="Search library"
								/>
							</div>
						</div>
						<div className={classes['sortByContainer']}>
							<SelectFromOptions
								componentWidth="150px"
								defaultValue="Sort by"
								border="2px solid #E7E7E7"
								selectedOptionIndex={props.selectedSortByOptionIndex}
								isShowMoreClicked={props.isSortByClicked}
								optionsList={sortByOptions}
								onSelectOptionsButton={props.onSortBy}
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

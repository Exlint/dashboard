import React, { useEffect, useState } from 'react';

import { ILibrary } from '@/interfaces/library';

import NewPolicyView from './NewPolicy.view';

interface IProps {
	readonly selectedGroupId: string;
}

const NewPolicy: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [policyLabelInputState, setPolicyLabelInputState] = useState<string | null>(null);
	const [selectedLibraryState, setSelectedLibraryState] = useState<ILibrary | null>(null);
	const [isSortByOnViewState, setIsSortByOnViewState] = useState<boolean>(false);

	const [isPolicyConfigurationClickedState, setIsPolicyConfigurationClickedState] = useState<
		boolean | null
	>(false);

	const [selectedSortByOptionIndexState, setSelectedSortByOptionIndexState] = useState<number | null>(null);

	const [isCreatePolicyDisabledState, setIsCreatePolicyDisabledState] = useState<boolean>(true);

	const [searchLibraryInputState, setSearchLibraryInputState] = useState<string | null>(null);

	const [selectedTypeIndexState, setSelectedTypeIndexState] = useState<number>(0);

	const [selectedCategoryIndexState, setSelectedCategoryIndexState] = useState<number>(0);

	const onSelectedLibrary = (library: ILibrary) => {
		setSelectedLibraryState(() => library);
	};

	const onCancelSelectedLibrary = () => {
		setSelectedLibraryState(() => null);
	};

	const onPolicyLabelInputChanged = (input: string) => setPolicyLabelInputState(() => input);

	const onSelectedSortBy = (index: number) => {
		setSelectedSortByOptionIndexState(() => index);
		setIsSortByOnViewState(() => false);
	};

	const onPolicyConfiguratoinClicked = () => {
		setIsPolicyConfigurationClickedState(() => !isPolicyConfigurationClickedState);
	};

	const toggleSortBy = () => {
		setIsSortByOnViewState((prev) => !prev);
	};

	useEffect(() => {
		if (selectedLibraryState && policyLabelInputState !== null && policyLabelInputState.length > 0) {
			setIsCreatePolicyDisabledState(() => false);
		} else {
			setIsCreatePolicyDisabledState(() => true);
		}
	}, [selectedLibraryState, policyLabelInputState]);

	const onSearchLibraryInput = (input: string) => {
		setSearchLibraryInputState(() => input);
	};

	const onSelectType = (index: number) => {
		setSelectedTypeIndexState(() => index);
	};

	const onSelectCategory = (index: number) => {
		setSelectedCategoryIndexState(() => index);
	};

	return (
		<NewPolicyView
			selectedGroupId={props.selectedGroupId}
			selectedLibrary={selectedLibraryState}
			policyLabelInput={policyLabelInputState}
			isPolicyConfigurationClicked={isPolicyConfigurationClickedState}
			searchLibraryInput={searchLibraryInputState}
			isSortByOnView={isSortByOnViewState}
			selectedSortByOptionIndex={selectedSortByOptionIndexState}
			isCreatePolicyDisabled={isCreatePolicyDisabledState}
			selectedTypeIndex={selectedTypeIndexState}
			selectedCategoryIndex={selectedCategoryIndexState}
			toggleSortBy={toggleSortBy}
			onSelectedLibrary={onSelectedLibrary}
			onCancelSelectedLibrary={onCancelSelectedLibrary}
			onPolicyLabelInputChanged={onPolicyLabelInputChanged}
			onPolicyConfiguratoinClicked={onPolicyConfiguratoinClicked}
			onSearchLibraryInput={onSearchLibraryInput}
			onSelectedSortBy={onSelectedSortBy}
			onSelectType={onSelectType}
			onSelectCategory={onSelectCategory}
		/>
	);
};

NewPolicy.displayName = 'NewPolicy';
NewPolicy.defaultProps = {};

export default React.memo(NewPolicy);

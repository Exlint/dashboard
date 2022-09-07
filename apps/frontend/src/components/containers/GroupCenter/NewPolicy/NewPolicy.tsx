import React, { useEffect, useState } from 'react';

import NewPolicyView from './NewPolicy.view';

interface IProps {
	readonly selectedGroupId: string;
}

const NewPolicy: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [policyLabelInputState, setPolicyLabelInputState] = useState<string | null>(null);
	const [selectedLibraryState, setSelectedLibraryState] = useState<string | null>(null);

	const [isPolicyConfigurationClickedState, setIsPolicyConfigurationClickedState] = useState<
		boolean | null
	>(false);

	const [selectedSortByOptionIndexState, setSelectedSortByOptionIndexState] = useState<number | null>(null);

	const [isCreatePolicyDisabledState, setIsCreatePolicyDisabledState] = useState<boolean>(true);

	const [searchLibraryInputState, setSearchLibraryInputState] = useState<string | null>(null);

	const [selectedTypeIndexState, setSelectedTypeIndexState] = useState<number>(0);

	const [selectedCategoryIndexState, setSelectedCategoryIndexState] = useState<number>(0);

	const onSelectLibrary = (libraryName: string) => {
		setSelectedLibraryState(() => libraryName);
	};

	const onCancelSelectedLibrary = () => {
		setSelectedLibraryState(() => null);
	};

	const onPolicyLabelInputChanged = (input: string) => setPolicyLabelInputState(() => input);

	const onSelect = (index: number) => {
		setSelectedSortByOptionIndexState(() => index);
	};

	const onPolicyConfiguratoinClicked = () => {
		setIsPolicyConfigurationClickedState(() => !isPolicyConfigurationClickedState);
	};

	const onSearchLibraryInput = (input: string) => {
		setSearchLibraryInputState(() => input);
	};

	const onSelectType = (index: number) => {
		setSelectedTypeIndexState(() => index);
	};

	const onSelectCategory = (index: number) => {
		setSelectedCategoryIndexState(() => index);
	};

	useEffect(() => {
		if (selectedLibraryState && policyLabelInputState !== null && policyLabelInputState.length > 0) {
			setIsCreatePolicyDisabledState(() => false);
		} else {
			setIsCreatePolicyDisabledState(() => true);
		}
	}, [selectedLibraryState, policyLabelInputState]);

	return (
		<NewPolicyView
			selectedGroupId={props.selectedGroupId}
			selectedLibrary={selectedLibraryState}
			policyLabelInput={policyLabelInputState}
			isPolicyConfigurationClicked={isPolicyConfigurationClickedState}
			searchLibraryInput={searchLibraryInputState}
			selectedSortByOptionIndex={selectedSortByOptionIndexState}
			isCreatePolicyDisabled={isCreatePolicyDisabledState}
			selectedTypeIndex={selectedTypeIndexState}
			selectedCategoryIndex={selectedCategoryIndexState}
			onSelectLibrary={onSelectLibrary}
			onCancelSelectedLibrary={onCancelSelectedLibrary}
			onPolicyLabelInputChanged={onPolicyLabelInputChanged}
			onPolicyConfiguratoinClicked={onPolicyConfiguratoinClicked}
			onSearchLibraryInput={onSearchLibraryInput}
			onSelect={onSelect}
			onSelectType={onSelectType}
			onSelectCategory={onSelectCategory}
		/>
	);
};

NewPolicy.displayName = 'NewPolicy';
NewPolicy.defaultProps = {};

export default React.memo(NewPolicy);

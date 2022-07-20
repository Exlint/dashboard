import React, { useState } from 'react';

import { ILibrary } from '@/interfaces/library';

import NewPolicyView from './NewPolicy.view';

interface IProps {
	readonly selectedGroupId: string;
}

const NewPolicy: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [selectedLibraryState, setSelectedLibraryState] = useState<ILibrary | null>(null);
	const [policyLabelInputState, setPolicyLabelInputState] = useState<string | null>(null);
	const [isSortByClicketState, setIsSortByClicketState] = useState<boolean>(false);

	const [isPolicyConfigurationClickedState, setIsPolicyConfigurationClickedState] = useState<
		boolean | null
	>(false);

	const [selectedSortByOptionIndexState, setSelectedSortByOptionIndexState] = useState<number | null>(null);

	const [isCreatePolicyDisableState, setIsCreatePolicyDisableState] = useState<boolean>(true);

	const onSelectedLibrary = (library: ILibrary) => {
		setSelectedLibraryState(() => library);
	};

	const onCancelSelectedLibrary = () => {
		setSelectedLibraryState(() => null);
	};

	const onPolicyLabelInputChanged = (input: string) => setPolicyLabelInputState(() => input);

	const onSelectedSortBy = (index: number) => {
		setSelectedSortByOptionIndexState(() => index);
		setIsSortByClicketState(() => false);
	};

	const onPolicyConfiguratoinClicked = () => {
		setIsPolicyConfigurationClickedState(() => !isPolicyConfigurationClickedState);
	};

	const toggleSortBy = () => {
		setIsSortByClicketState((prev) => !prev);
	};

	if (selectedLibraryState && policyLabelInputState !== null && policyLabelInputState.length !== 0) {
		setIsCreatePolicyDisableState(() => true);
	}

	return (
		<NewPolicyView
			selectedGroupId={props.selectedGroupId}
			selectedLibrary={selectedLibraryState}
			policyLabelInput={policyLabelInputState}
			isPolicyConfigurationClicked={isPolicyConfigurationClickedState}
			isSortByClicked={isSortByClicketState}
			selectedSortByOptionIndex={selectedSortByOptionIndexState}
			isCreatePolicyDisable={isCreatePolicyDisableState}
			toggleSortBy={toggleSortBy}
			onSelectedLibrary={onSelectedLibrary}
			onCancelSelectedLibrary={onCancelSelectedLibrary}
			onPolicyLabelInputChanged={onPolicyLabelInputChanged}
			onPolicyConfiguratoinClicked={onPolicyConfiguratoinClicked}
			onSelectedSortBy={onSelectedSortBy}
		/>
	);
};

NewPolicy.displayName = 'NewPolicy';
NewPolicy.defaultProps = {};

export default React.memo(NewPolicy);

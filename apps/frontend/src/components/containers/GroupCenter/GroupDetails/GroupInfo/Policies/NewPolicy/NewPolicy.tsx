import React, { useState } from 'react';

import { IGroup } from '@/interfaces/group';
import { ILibrary } from '@/interfaces/library';

import NewPolicyView from './NewPolicy.view';

interface IProps {
	readonly selectedGroup: IGroup | null;
	readonly selectedLibrary: ILibrary | null;
	readonly policyLabelInput: string | null;
	readonly onPolicyLabelInputChanged: (input: string) => void;
	readonly onSelectedLibrary: (library: ILibrary) => void;
	readonly onCancelSelectedLibrary: () => void;
}

const NewPolicy: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [isSortByClicketState, setIsSortByClicketState] = useState<boolean>(false);

	const [isPolicyConfigurationClickedState, setIsPolicyConfigurationClickedState] = useState<
		boolean | null
	>(false);

	const [selectedSortByOptionIndexState, setSelectedSortByOptionIndexState] = useState<number | null>(null);

	const onSelectedSortBy = (index: number) => {
		setSelectedSortByOptionIndexState(() => index);
		setIsSortByClicketState(() => false);
	};

	const onPolicyConfiguratoinClicked = () => {
		setIsPolicyConfigurationClickedState(() => !isPolicyConfigurationClickedState);
	};

	const onSortBy = () => {
		setIsSortByClicketState(() => !isSortByClicketState);
	};

	return (
		<NewPolicyView
			selectedGroup={props.selectedGroup}
			isSortByClicked={isSortByClicketState}
			selectedLibrary={props.selectedLibrary}
			policyLabelInput={props.policyLabelInput}
			isPolicyConfigurationClicked={isPolicyConfigurationClickedState}
			selectedSortByOptionIndex={selectedSortByOptionIndexState}
			onSelectedSortBy={onSelectedSortBy}
			onPolicyConfiguratoinClicked={onPolicyConfiguratoinClicked}
			onPolicyLabelInputChanged={props.onPolicyLabelInputChanged}
			onSelectedLibrary={props.onSelectedLibrary}
			onCancelSelectedLibrary={props.onCancelSelectedLibrary}
			onSortBy={onSortBy}
		/>
	);
};

NewPolicy.displayName = 'NewPolicy';
NewPolicy.defaultProps = {};

export default React.memo(NewPolicy);

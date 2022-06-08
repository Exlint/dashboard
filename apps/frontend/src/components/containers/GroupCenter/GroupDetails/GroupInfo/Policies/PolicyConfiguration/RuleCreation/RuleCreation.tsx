import React, { useState } from 'react';

import { ILibrary } from '@/interfaces/library';
import RuleCreationView from './RuleCreation.view';

interface IProps {
	readonly policyLabelInput: string | null;
	readonly selectedLibrary: ILibrary | null;
}

const RuleCreation: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [selectedFileFormatIndexState, setSelectedFileFormatIndexState] = useState<number>(0);
	const [isFileFormatClickedState, setIsFileFormatClickedState] = useState<boolean>(false);
	const [isEditFileFormatState, setIsEditFileFormatState] = useState<boolean>(false);

	const [policyCodeBasedConfigurationsInputState, setPolicyCodeBasedConfigurationsInputState] =
		useState<string>('');

	const onEditFileFormatButton = () => {
		setIsEditFileFormatState(() => !isEditFileFormatState);
	};

	const onFileFormatButton = () => {
		setIsFileFormatClickedState(() => !isFileFormatClickedState);
	};

	const onSelectedFileFormat = (index: number) => {
		setSelectedFileFormatIndexState(() => index);
		setIsFileFormatClickedState(() => false);
	};

	const onPolicyCodeBasedConfigurationsInputChanged = (input: string) =>
		setPolicyCodeBasedConfigurationsInputState(() => input);

	return (
		<RuleCreationView
			policyLabelInput={props.policyLabelInput}
			selectedLibrary={props.selectedLibrary}
			selectedFileFormatIndex={selectedFileFormatIndexState}
			isFileFormatClicked={isFileFormatClickedState}
			isEditFileFormat={isEditFileFormatState}
			policyCodeBasedConfigurationsInputState={policyCodeBasedConfigurationsInputState}
			onEditFileFormatButton={onEditFileFormatButton}
			onFileFormatButton={onFileFormatButton}
			onSelectedFileFormat={onSelectedFileFormat}
			onPolicyCodeBasedConfigurationsInputChanged={onPolicyCodeBasedConfigurationsInputChanged}
		/>
	);
};

RuleCreation.displayName = 'RuleCreation';
RuleCreation.defaultProps = {};

export default React.memo(RuleCreation);

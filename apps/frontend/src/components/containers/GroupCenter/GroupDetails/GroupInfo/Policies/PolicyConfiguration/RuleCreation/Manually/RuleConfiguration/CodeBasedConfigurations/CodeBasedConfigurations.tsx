import React, { useState } from 'react';

import CodeBasedConfigurationsView from './CodeBasedConfigurations.view';

interface IProps {
	readonly policyLabelInput: string | null;
	readonly selectedRuleIndex: number | null;
	readonly isBasedCodeConfigurationsClicked: boolean;
	readonly ruleCodeBasedConfigurationsInput: string;
	readonly onClickBasedCodeConfigurations: () => void;
	readonly onCodeBasedConfigurationsInputChanged: (input: string) => void;
}

const CodeBasedConfigurations: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [selectedFileFormatIndexState, setSelectedFileFormatIndexState] = useState<number>(0);
	const [isFileFormatClickedState, setIsFileFormatClickedState] = useState<boolean>(false);
	const [isEditFileFormatState, setIsEditFileFormatState] = useState<boolean>(false);

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

	return (
		<CodeBasedConfigurationsView
			policyLabelInput={props.policyLabelInput}
			selectedRuleIndex={props.selectedRuleIndex}
			selectedFileFormatIndex={selectedFileFormatIndexState}
			isFileFormatClicked={isFileFormatClickedState}
			isEditFileFormat={isEditFileFormatState}
			isBasedCodeConfigurationsClicked={props.isBasedCodeConfigurationsClicked}
			ruleCodeBasedConfigurationsInput={props.ruleCodeBasedConfigurationsInput}
			onEditFileFormatButton={onEditFileFormatButton}
			onFileFormatButton={onFileFormatButton}
			onSelectedFileFormat={onSelectedFileFormat}
			onClickBasedCodeConfigurations={props.onClickBasedCodeConfigurations}
			onCodeBasedConfigurationsInputChanged={props.onCodeBasedConfigurationsInputChanged}
		/>
	);
};

CodeBasedConfigurations.displayName = 'CodeBasedConfigurations';
CodeBasedConfigurations.defaultProps = {};

export default React.memo(CodeBasedConfigurations);

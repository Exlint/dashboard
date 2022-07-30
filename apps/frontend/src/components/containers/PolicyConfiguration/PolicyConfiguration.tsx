import React, { useState } from 'react';

import PolicyConfigurationView from './PolicyConfiguration.view';

interface IProps {}

const PolicyConfiguration: React.FC<IProps> = () => {
	const [ruleCodeBasedConfigurationsInputState, setRuleCodeBasedConfigurationsInputState] =
		useState<string>('');

	const [selectedFileFormatIndexState, setSelectedFileFormatIndexState] = useState<number>(0);
	const [isFileFormatClickedState, setIsFileFormatClickedState] = useState<boolean>(false);
	const [isEditFileFormatState, setIsEditFileFormatState] = useState<boolean>(false);

	const onCodeBasedConfigurationsInputChanged = (input: string) => {
		setRuleCodeBasedConfigurationsInputState(() => input);
	};

	const onEditFileFormatButton = () => {
		setIsEditFileFormatState(() => !isEditFileFormatState);
	};

	const onFileFormatButton = () => {
		setIsFileFormatClickedState(() => !isFileFormatClickedState);
	};

	const onSelectedFileFormat = (index: number) => {
		setSelectedFileFormatIndexState(() => index);
	};

	return (
		<PolicyConfigurationView
			ruleCodeBasedConfigurationsInput={ruleCodeBasedConfigurationsInputState}
			selectedFileFormatIndex={selectedFileFormatIndexState}
			isFileFormatClicked={isFileFormatClickedState}
			isEditFileFormat={isEditFileFormatState}
			onCodeBasedConfigurationsInputChanged={onCodeBasedConfigurationsInputChanged}
			onEditFileFormatButton={onEditFileFormatButton}
			onFileFormatButton={onFileFormatButton}
			onSelectedFileFormat={onSelectedFileFormat}
		/>
	);
};

PolicyConfiguration.displayName = 'RuleCreation';
PolicyConfiguration.defaultProps = {};

export default React.memo(PolicyConfiguration);

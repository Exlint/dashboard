import React, { useState } from 'react';

import type { IRule } from '@/interfaces/rule';

import CodeBasedConfigurationsView from './CodeBasedConfigurations.view';

interface IProps {
	readonly policyLabelInput: string | null;
	readonly selectedRule: IRule | null;
	readonly isBasedCodeConfigurationsClicked: boolean;
	readonly ruleCodeBasedConfigurationsInput: string;
	readonly onClickBasedCodeConfigurations: () => void;
	readonly onCodeBasedConfigurationsInputChanged: (input: string) => void;
}

const CodeBasedConfigurations: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [isEditFileFormatState, setIsEditFileFormatState] = useState<boolean>(false);

	const onEditFileFormatButton = () => {
		setIsEditFileFormatState((prev) => !prev);
	};

	return (
		<CodeBasedConfigurationsView
			policyLabelInput={props.policyLabelInput}
			selectedRule={props.selectedRule}
			isEditFileFormat={isEditFileFormatState}
			isBasedCodeConfigurationsClicked={props.isBasedCodeConfigurationsClicked}
			ruleCodeBasedConfigurationsInput={props.ruleCodeBasedConfigurationsInput}
			onEditFileFormatButton={onEditFileFormatButton}
			onClickBasedCodeConfigurations={props.onClickBasedCodeConfigurations}
			onCodeBasedConfigurationsInputChanged={props.onCodeBasedConfigurationsInputChanged}
		/>
	);
};

CodeBasedConfigurations.displayName = 'CodeBasedConfigurations';
CodeBasedConfigurations.defaultProps = {};

export default React.memo(CodeBasedConfigurations);

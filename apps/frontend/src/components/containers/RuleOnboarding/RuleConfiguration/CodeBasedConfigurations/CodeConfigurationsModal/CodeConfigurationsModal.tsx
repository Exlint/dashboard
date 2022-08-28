import React from 'react';

import CodeConfigurationsModalView from './CodeConfigurationsModal.view';

interface IProps {
	readonly policyLabelInput: string | null;
	readonly isEditFileFormat: boolean;
	readonly ruleCodeBasedConfigurationsInput: string;
	readonly onEditFileFormatButton: () => void;
	readonly onCloseCodeConfigurationsModal: () => void;
	readonly onCodeBasedConfigurationsInputChanged: (input: string) => void;
}

const CodeConfigurationsModal: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<CodeConfigurationsModalView
			policyLabelInput={props.policyLabelInput}
			isEditFileFormat={props.isEditFileFormat}
			ruleCodeBasedConfigurationsInput={props.ruleCodeBasedConfigurationsInput}
			onEditFileFormatButton={props.onEditFileFormatButton}
			onCloseCodeConfigurationsModal={props.onCloseCodeConfigurationsModal}
			onCodeBasedConfigurationsInputChanged={props.onCodeBasedConfigurationsInputChanged}
		/>
	);
};

CodeConfigurationsModal.displayName = 'CodeConfigurationsModal';
CodeConfigurationsModal.defaultProps = {};

export default React.memo(CodeConfigurationsModal);

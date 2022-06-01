import React from 'react';

import { ILibrary } from '@/interfaces/library';

import PolicyConfigurationView from './PolicyConfiguration.view';

interface IProps {
	readonly selectedLibrary: ILibrary | null;

	readonly policyLabelInput: string | null;
}

const PolicyConfiguration: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<PolicyConfigurationView
			selectedLibrary={props.selectedLibrary}
			policyLabelInput={props.policyLabelInput}
		/>
	);
};

PolicyConfiguration.displayName = 'RuleCreation';
PolicyConfiguration.defaultProps = {};

export default React.memo(PolicyConfiguration);

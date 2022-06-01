import React from 'react';

import { ILibrary } from '@/interfaces/library';

import PolicyConfigurationButtonView from './PolicyConfigurationButton.view';

interface IProps {
	readonly selectedLibrary: ILibrary | null;
	readonly onPolicyConfiguratoinClicked: () => void;
	readonly policyLabelInput: string | null;
}

const PolicyConfigurationButton: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<PolicyConfigurationButtonView
			selectedLibrary={props.selectedLibrary}
			policyLabelInput={props.policyLabelInput}
			onPolicyConfiguratoinClicked={props.onPolicyConfiguratoinClicked}
		/>
	);
};

PolicyConfigurationButton.displayName = 'PolicyConfigurationButton';
PolicyConfigurationButton.defaultProps = {};

export default React.memo(PolicyConfigurationButton);

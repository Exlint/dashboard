import React from 'react';

import { backendApi } from '@/utils/http';

import PolicyConfigurationButtonView from './PolicyConfigurationButton.view';

interface IProps {
	readonly selectedGroupId: string;
	readonly selectedLibrary: string | null;
	readonly policyLabelInput: string | null;
	readonly isButtonDisabled: boolean;
}

const PolicyConfigurationButton: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const onCreateNewPolicy = () => {
		backendApi.post(`/user/inline-policies/${props.selectedGroupId}`, {
			label: props.policyLabelInput,
			library: props.selectedLibrary?.toLocaleUpperCase(),
		});
	};

	return (
		<PolicyConfigurationButtonView
			isButtonDisabled={props.isButtonDisabled}
			onCreateNewPolicy={onCreateNewPolicy}
		/>
	);
};

PolicyConfigurationButton.displayName = 'PolicyConfigurationButton';
PolicyConfigurationButton.defaultProps = {};

export default React.memo(PolicyConfigurationButton);
